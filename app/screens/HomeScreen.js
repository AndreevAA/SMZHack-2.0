import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export class HomeScreen extends Component {
  render = () => {
    return (
      <View style={styles.container}>
          <Text>{"ЕПТ домашний экран"}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});