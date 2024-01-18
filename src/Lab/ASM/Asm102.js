import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { color } from 'react-native-elements/dist/helpers';

const Asm21 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [forgotPassword, setForgotPassword] = useState('');

    return (
        <View style={styles.tong}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Setting</Text>
            <View style={styles.container}>
                <Image source={require('../../image/cho.png')} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.inputContainer}>
            
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={name}
                            onChangeText={setName}
                            placeholder="Name"
                            style={styles.input}
                        />
                    </View>
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
                    <View style={styles.inputWrapper}>
                        <TextInput
                            value={forgotPassword}
                            onChangeText={setForgotPassword}
                            placeholder="For gotPassword"
                            secureTextEntry
                            style={styles.input}
                        />
                    </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

            
            </View>

        </View>
    );
}; const styles = StyleSheet.create({
    textforgot: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgot: {
        color: 'white',
        textDecorationColor: '#FF6600',
        marginTop: 10,
        fontSize: 14,
        textDecorationThickness: 1,
        textDecorationStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    register: {
        color: 'white',
        textDecorationColor: '#FF6600',
        marginTop: 40,
        fontSize: 16,
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
        width: 150,
        height: 200,
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
