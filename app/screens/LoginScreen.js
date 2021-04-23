import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';


const user = {
                balance: '200000R',
                companyName: 'TassovCompany',
                avatar: {medium: '../assets/profile.png'}}

export class LoginScreen extends Component {
  render = () => {
    return (
        <View style={styles.mainContainer}>
            <Text
            onPress={() => {
                this.props.navigation.navigate('Home');
            }}
            >{"Ну тут типа логин"}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  mainContainer: {
    backgroundColor: '#00ff00',
  },

  userView: {
    flex: 1,
    alignItems: 'flex-start',
  },

  avatar: {
    margin: 10,
  },

  companyName: {
    margin: 5,
  },

  balance: {
    margin: 5
  }
});
