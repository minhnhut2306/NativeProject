import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { color } from 'react-native-elements/dist/helpers';

const Asm21 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.tong}>
      <View style={styles.container}>
        <Image source={require('../../image/coffe.png')} style={styles.image} resizeMode='cover' />
        <Text style={styles.title}>Welcome to Lungo !!</Text>
        <Text style={styles.subtitle}>Login to Continue</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textforgot}>
        <Text style={styles.register}>Don't have account? Click <Text style={{ color: '#FF6600',fontWeight:'bold'}}> Register</Text></Text>
        <Text style={styles.forgot}>Forgot passsword? Click <Text style={{ color: '#FF6600',fontWeight:'bold'}}> Forgot</Text></Text>
      </View>
    </View>
  );
}; const styles = StyleSheet.create({
  textforgot:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot:{
    color: 'white',
    textDecorationColor: '#FF6600',
    marginTop:10,
    fontSize:14,
    textDecorationThickness: 1,
    textDecorationStyle:'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  register: {
    color: 'white',
    textDecorationColor: '#FF6600',
    marginTop:40,
    fontSize:16,
    textDecorationThickness: 1,
    textDecorationStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF6600',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  googleButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  googleButtonText: {
    color: 'black',
    textAlign: 'center',
  },
  tong: {
    width: '100%',
    height: '100%',
    backgroundColor: '#444444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Asm21;
