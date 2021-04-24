import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TextInput, TouchableOpacity} from 'react-native'

const user = {
                balance: '200000R',
                companyName: 'TassovCompany',
                avatar: {medium: '../assets/profile.png'}}

export class EntryScreen extends Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>НАЙМИКС</Text>
        <Text style={styles.sublogo}>Вход в приложение НАЙМИКС ДИРЕКТОР</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Логин..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Пароль..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Забыли пароль?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => {this.props.navigation.navigate('HomeNav')}}>
          <Text style={styles.loginText}>Войти</Text>
        </TouchableOpacity>
  
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
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
  inputView:{
    width:"80%",
    backgroundColor:"#FFFF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    borderWidth: 1,
    borderColor: '#828282'
  },
  inputText:{
    height:50,
    color:"black",
  },
  forgot:{
    fontWeight:"bold",
    color:"black",
    fontSize:14,
    marginTop: 20,
    marginBottom: 100
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#4CA64B",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white",
    fontWeight:"bold",
    fontSize: 16
  }
});
