import React, {Component, Fragment, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import {Backdrop} from 'react-native-backdrop';

const user = {
                balance: '1000000',
                companyName: 'OOO Клинер Инвестмент',
                avatar: {medium: './profile.png'}
};

export function HomeScreen () {
  const [visible, setVisible] = useState(false);
  
  const handleOpen = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#4CA64B'}}>
      <View style={styles.mainContainer}>
        <View style={styles.upBar}>
          <View style={styles.userView}>
            <Image source={require('./profile.png')} style={styles.avatar}/>
            <Text style={styles.companyName}> {user.companyName} </Text>
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
          onPress={()=>{this.props.navigation.navigate('Blank')}}>
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
                4
              </Text>
          }
          <Icon name={"bell-o"} color={'#4CA64B'} size={24} style={{marginTop: 6, marginLeft: 6}}/>
        </TouchableOpacity>        
      </View>
      <Backdrop
        visible={visible}
        handleOpen={handleOpen}
        handleClose={handleClose}
        overlayColor={'rgba(0,0,0,0.0)'}
        header={
          <View style={{
            backgroundColor: "#614242",
            alignSelf: "center",
            margin: 5,
            borderRadius: 5,
            height: 2,
            width: 72,
          }}>
          </View>
        }
        containerStyle={{
          height: "85%",
          backgroundColor: '#fafafa',
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
        }}
        backdropStyle={{backgroundColor: '#fbccfb'}}
        beforeOpen={() => console.log('beforeOpen')}
        afterOpen={() => console.log('afterOpen')}
        beforeClose={() => console.log('beforeClose')}
        afterClose={() => console.log('afterClose')}
        closedHeight={440}>
        <ScrollView>
          <Text>Карточка с оплатой 1</Text>
        </ScrollView>
      </Backdrop>
    </SafeAreaView>
  );
};

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
