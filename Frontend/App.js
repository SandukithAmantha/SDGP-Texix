import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
      <Image
      style={styles.logo}
      source= {require('./assets/logo.png')} />
      <Text style = {styles.login}>Member Login</Text>
      <StatusBar style="auto" />
      <View>
      <TextInput style={styles.input}
       placeholder='username or email'
       placeholderTextColor='rgba(255,255,255,0.7)' >
      </TextInput>
      <TextInput style={styles.input}
       placeholder='password'
       placeholderTextColor='rgba(255,255,255,0.7)'>
      </TextInput>
      <Button title = 'login'></Button>
      <Text style = {styles.or}>Don't have an account?</Text>
      <Button title = 'sign up' color = '#3CB371'></Button>
      <Text style = {styles.forgotPassword}>Forgot your password?</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12232E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  login: {
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
    letterSpacing:3,
    marginBottom:20,
  },

  logo: {
    width:100,
    height:100,
  },

  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    width:300,
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 10
  },

  or: {
    textAlign:'center',
    fontSize:13,
    color:'#FFFFFF',
    marginTop:10,
    marginBottom:10,
  },

  forgotPassword: {
    textAlign:'center',
    fontSize:13,
    color:'#FFFFFF',
    marginTop:10,
  }
  
});
