import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const user = {
                balance: '1000000',
                companyName: 'OOO ФРЕШ ПРОДАКТС',
                avatar: {medium: './profile.png'}
};

export class HomeScreen extends Component {
  render = () => {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.upBar}>
            <View style={styles.userView}>
              <Image source={require('./profile.png')}
                  style={styles.avatar}
              />
              <Text style={styles.companyName}>
                  {user.companyName}
              </Text>
              <View style={styles.notificationView}>
              </View>
              <View style={styles.storyboard}>
              </View>
            </View>
            <Text style={styles.balance}>
              Баланс: {user.balance}
            </Text>

          </View>
            <TouchableOpacity
                activeOpacity={1}
                style={{
                    backgroundColor: 'white',
                    alignSelf: 'flex-end',
                    zIndex: 1,
                    borderRadius: 20,
                    height: 40,
                    width: 40,
                    bottom: 15,
                }}
                onPress={()=>{this.props.navigation.navigate('Cart')}}>
                {
                    <Text
                        style={{
                            backgroundColor: 'white',
                            alignSelf: 'flex-end',
                            color: '#000000',
                            fontSize: 10,
                            zIndex: 1,
                            position: 'absolute',
                            width: 15,
                            textAlign: 'center',
                            bottom: 15,
                            height: 15,
                            borderRadius: 8,
                            marginBottom: 10,
                        }}>
                        {'4'}
                    </Text>
                }
                <Icon name={"bell-o"} color={'#4CA64B'} size={24} style={{marginTop: 6, marginLeft: 6}}/>
            </TouchableOpacity>
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
    backgroundColor: '#4CA64B',
  },

  userView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  companyName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFFFF'
  },

  balance: {
    marginLeft: 60,
    marginTop: 10,
    color: '#FFFFFF'
  }
});
