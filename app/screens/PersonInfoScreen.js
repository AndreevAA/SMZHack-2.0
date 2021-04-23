import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export class PersonInfoScreen extends Component {
  renderRow = (cells) => {
    return cells.map((cell) => (
      <View style={styles.cell} key={cell.title}>
        <Text style={styles.cellTitle}>{cell.title}</Text>
        <Text style={styles.cellValue}>{cell.value}</Text>
      </View>
    ));
  };

  render = () => {
    const {post} = this.props.route.params;
    return (
        <WebView source={{ uri: post.links[0].url }} />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  cell: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTitle: {
    fontSize: 13,
    color: '#b0b0b0',
  },
  cellValue: {
    marginTop: 10,
    fontSize: 16,
    color: '#2e2e2e',
  },
});