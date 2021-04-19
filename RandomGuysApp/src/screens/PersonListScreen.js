import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {PersonListItem} from '../components/PersonListItem';

export class PersonListScreen extends Component {
	state = {
		list: [],
		isLoading: false,
	};

	componentDidMount = () => {
		this.onRefresh();
	};

	getMoreData = (isRefreshing) => {};

	onRefresh = () => {
		this.getMoreData(true);
	};

	onScrollToEnd = ({distanceFromEnd}) => {
		if (distanceFromEnd < 0) {
			return;
		}
		this.getMoreData(false);
	};

	onItemPress = (item) => {
		this.props.navigation.navigate('info', {person: item});
	};

	keyExtractor = (person) => person.login.uuid;

	renderItem = ({item}) => {
	return (
		<PersonListItem
			person={item}
			onPress={this.onItemPress.bind(this, item)}
		/>
		);
	};

	render = () => {
	const {isLoading, list} = this.state;

	return (
		<View style={styles.container}>
		<FlatList
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