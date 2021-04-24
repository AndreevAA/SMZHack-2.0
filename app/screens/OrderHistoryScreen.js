import React, {Component} from 'react';
import {Image, FlatList, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {OrderListItem} from "../components/OrderListItem";
import SwipeActionList from 'react-native-swipe-action-list';


export class OrderHistoryScreen extends Component {
    state = {
        list: [
            {
                "title" : "name",
                "completed" : "2021-10-11",
                "price" : "15000",
                "executors" : ["exe 1", "exe 2"],
                "status" : "Новая",
                "object" : "obj"
            }
        ],
        isLoading: false,
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

    onItemPress = (item) => {
        this.props.navigation.navigate('Новость', {order: item});
    };

    keyExtractor = (order) => order.id;

    renderItem = ({item}) => {
        return (
            <OrderListItem
                order={item}
                onPress={this.onItemPress.bind(this, item)}
            />
        );
    };

    render = () => {
        const {isLoading, list} = this.state;

        return (
            <View style={styles.container}>
                <SwipeActionList
                    style={styles.list}
                    data={list}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    refreshing={isLoading}
                    onRefresh={this.onRefresh}
                    onEndReached={this.onScrollToEnd}
                    onEndReachedThreshold={0.2}
                    renderLeftHiddenItem={() => <View>
                        <Icon name={"circle"}  color={'#4CA64B'} size={16} style={{marginLeft: 5}}/>
                        </View>}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
    },
});