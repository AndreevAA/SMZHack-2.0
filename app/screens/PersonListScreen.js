import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import {NewsListItem} from '../components/PersonListItem';

import * as rssParser from 'react-native-rss-parser';

export class NewsListScreen extends Component {
  state = {
    list: [],
    isLoading: false,
  };

  componentDidMount = () => {
    this.onRefresh();
  };

  getMoreData = (isRefreshing) => {
    const limit = 15;
    const offset = isRefreshing ? 0 : this.state.list.length;
    const page = Math.ceil(offset / limit) + 1;
    fetch(`http://static.feed.rbc.ru/rbc/logical/footer/news.rss`)
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
        this.setState({
          list: isRefreshing
            ? rss.items
            : this.state.list.concat(rss.items),
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  onRefresh = () => {
    this.getMoreData(true);
  };

  onScrollToEnd = ({distanceFromEnd}) => {
    this.getMoreData(false);
  };

  onItemPress = (item) => {
    this.props.navigation.navigate('Новость', {post: item});
  };

  keyExtractor = (post) => post.id;

  renderItem = ({item}) => {
    return (
      <NewsListItem
        post={item}
        onPress={this.onItemPress.bind(this, item)}
      />
    );
  };

  render = () => {
    const {isLoading, list} = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={list}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          refreshing={isLoading}
          onRefresh={this.onRefresh}
          onEndReached={this.onScrollToEnd}
          onEndReachedThreshold={0.2}
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