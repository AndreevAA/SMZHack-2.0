import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';


const user = {
                balance: '200000R',
                companyName: 'TassovCompany',
                avatar: {medium: '../assets/profile.png'}}

export class HomeScreen extends Component {
  render = () => {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.upBar}>
            <View style={styles.userView}>
              <Image source={require('../assets/profile.png')}
                  style={styles.avatar}
              />
              <Text style={styles.companyName}>
                  {user.companyName}
              </Text>
              <Text style={styles.balance}>
                  {user.balance}
              </Text>
              <View style={styles.notificationView}>
              </View>
              <View style={styles.storyboard}>
              </View>
            </View>
          </View>
        <View style={styles.bottomContainer}>
        </View>
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
