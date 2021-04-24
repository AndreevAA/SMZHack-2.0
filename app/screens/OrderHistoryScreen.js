import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {OrderListItem} from "../components/OrderListItem";
import SwipeActionList from 'react-native-swipe-action-list';


export class OrderHistoryScreen extends Component {
    state = {
            list: [
                {
                    "id" : "1",
                    "title" : "Работник торгого зала",
                    "completed" : "2021.10.11",
                    "price" : "15 000",
                    "executors" : ["Андреев А.А"],
                    "status" : "Новая",
                    "object" : "ТРЦ Филион"
                },
                {
                    "id" : "2",
                    "title" : "Услуги по консультированию клинентов",
                    "completed" : "2021.10.11",
                    "price" : "20 000",
                    "executors" : ["Елисеев В.А"],
                    "status" : "Новая",
                    "object" : "ТРЦ Филион"
                },
                {
                    "id" : "3",
                    "title" : "Создание сайта",
                    "completed" : "2021.10.21",
                    "price" : "60 000",
                    "executors" : ["Анна Н. Г."],
                    "status" : "Новая",
                    "object" : "(без объекта)"
                },
                {
                    "id" : "4",
                    "title" : "Группа: (5) Разработка мобильного приложения",
                    "completed" : "2021.10.11",
                    "price" : "300 000",
                    "executors" : ["Андрей Н. Г", "Николай Н. Г", "..."],
                    "status" : "Новая",
                    "object" : "(без объекта)"
                }
            ],
            isLoading: false,
            key: "",
        };



    componentDidMount = () => {
        this.onRefresh();
    };

    // getMoreData = (isRefreshing) => {
    //     const limit = 15;
    //     const offset = isRefreshing ? 0 : this.state.list.length;
    //     const page = Math.ceil(offset / limit) + 1;
    //     fetch(`http://static.feed.rbc.ru/rbc/logical/footer/news.rss`)
    //         .then((response) => response.text())
    //         .then((responseData) => rssParser.parse(responseData))
    //         .then((rss) => {
    //             this.setState({
    //                 list: isRefreshing
    //                     ? rss.items
    //                     : this.state.list.concat(rss.items),
    //             });
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };

    onRefresh = () => {
        // this.state.list =
        // this.getMoreData(true);
    };

    onScrollToEnd = ({distanceFromEnd}) => {
        // this.getMoreData(false);
    };

    toPayedItems = (key) => {
      console.log("key is " + key);
      this.state.key = key;
      // this.state.list.push(this.state.list.find(f => f.id === key))

    };

    toDelayedItems = (key) => {
      console.log("key is del " + key);
      this.state.key = key;
    };


    onItemPress = (item) => {
        this.props.navigation.navigate('Blank', {order: item});
    };

    keyExtractor = (order) => order.id;

    renderItem = ({item}) => {
        return (
            <OrderListItem
                order={item}
                // onPress={this.onItemPress.bind(this, item)}
            />
        );
    };

    onPressRight = () => {
        console.log("PRESSED " + this.state.key + " / " + this.state.list);
        let elem = this.state.list.find(f => f.id === this.state.key);
        console.log("elem " + Object.keys(elem));
        let list = this.state.list.filter(f => f.id !== this.state.key);
        elem.status = elem.status === "Отложена" ? "Оплачена" :
            elem.status === "Новая" ? "Оплачена" : "Отложена" ;
        list.push(elem);
        this.setState({list: list, isLoading: true});
    };

    onPressLeft = () => {
        console.log("PRESSED " + this.state.key + " / " + this.state.list);

        let elem = this.state.list.find(f => f.id === this.state.key);
        console.log("elem " + Object.keys(elem));
        let list = this.state.list.filter(f => f.id !== this.state.key);
        elem.status = "Отложена";
        list.push(elem);
        this.setState({list: list, isLoading: true});

        // сменить баланс
    };

    render = () => {
        const {isLoading, list} = this.state;

        return (
            <View>
                <SwipeActionList
                    style={styles.container}
                    data={this.state.list}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    onEndReached={this.onScrollToEnd}
                    onEndReachedThreshold={0.2}
                    renderLeftHiddenItem={() => <TouchableOpacity  style={{
                        width: 400,
                        height: 150,
                        backgroundColor: isLoading ? '#4CA64B' : 'red',
                        marginTop: 5,
                    }} onPress={this.onPressLeft}>
                        <Icon name={'check-circle'} color={'white'} size={30} style={{marginTop: 60, marginLeft: 20}}/>
                        </TouchableOpacity>}
                    renderRightHiddenItem={() =>  <TouchableOpacity style={{
                        width: 400,
                        height: 150,
                        backgroundColor:'#BFD154',
                        marginTop: 5
                    }}
                    onPress={this.onPressRight}>
                        <Icon name={'inbox'} color={'white'} size={30} style={{marginTop: 60, marginLeft: 320}}/>
                    </TouchableOpacity>}
                    onSwipeLeft={this.toPayedItems}
                    onSwipeRight={this.toDelayedItems}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
});