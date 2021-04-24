import React, {Component, useState} from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native';


const user = {
    balance: '1000000',
    companyName: 'OOO ФРЕШ ПРОДАКТС',
    avatar: {medium: './profile.png'}
};

export class ProfileScreen extends Component {
    render = () => {
        return (
            <View style={styles.container}>
                <Image source={require('./profile.png')}
                       style={styles.avatar}
                />
                <Text style={styles.name}>
                    OOO ФРЕШ ПРОДАКТС
                </Text>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    this.props.navigation.navigate('История заказов')}}>
                    <Text style={styles.loginText}>ИСТОРИЯ ЗАКАЗОВ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    this.props.navigation.navigate('Настройки')}}>
                    <Text style={styles.loginText}>НАСТРОЙКИ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    this.props.navigation.navigate('Выйти')}}>
                    <Text style={styles.loginText}>ВЫЙТИ</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

{/* <Text
onPress={() => {
    this.props.navigation.navigate('HomeNav');
}}
>{"Ну тут типа логин"}</Text> */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    sublogo:{
        fontWeight:"bold",
        fontSize:18,
        color:"#000000",
        marginBottom:20,
    },

    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#4CA64B",
        marginBottom:40,
    },

    inputText:{
        height:50,
        color:"black",
    },
    loginBtn:{
        width:"80%",
        // backgroundColor:"#4CA64B",
        // borderRadius:25,
        // height:50,
        // marginTop:40,
        marginLeft: 50,
        marginBottom:10
    },
    loginText:{
        color:"black",
        fontWeight:"bold",
        fontSize: 20
    },
    avatar: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginLeft: 155,
        resizeMode: 'contain',
    },
    name: {
        marginTop: 10,
        marginBottom: 70,
        marginLeft: 85,
        resizeMode: 'contain',
        color:"black",
        fontWeight:"bold",
        fontSize: 20
    },
});

