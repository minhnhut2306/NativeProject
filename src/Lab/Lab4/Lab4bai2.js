import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Lab4bai2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contaichu}>
                <Text style={styles.textFont}>
                    Hi Welcome Back!
                </Text>
                <Image source={require('../../image/tay.png')} style={styles.image} />

            </View>
            <View style={styles.contaihello}>
                <Text style={styles.textFont2}>
                    Hi Welcome Back!
                </Text>
            </View>
            <View style={styles.contaianh}>
                <Image source={require('../../image/anh.png')} style={styles.photo} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        padding: 15,
        marginStart: 10,
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 100,
    },
    contaichu: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',

    },
    textFont: {
        marginRight: 10,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    contaihello: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textFont2: {
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 26,
        letterSpacing: 0.5,
    },
    contaianh: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingEnd: 15,
        marginTop:-30,

    },
    photo: {
        width: '95%',
        height: 400,
    },
    
});

export default Lab4bai2;
