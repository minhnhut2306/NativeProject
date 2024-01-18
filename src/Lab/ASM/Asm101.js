import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const Asm101 = () => {
  return (
    <View>
        <View>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
            <Entypo name="controller-record" />
            Setting
          </Text>
        </View>
    </View>
  );
};

export default Asm101;
