import { View, Text,Image} from 'react-native'
import React from 'react'

const Chat = () => {
  return (
    <View style={{backgroundColor:'black', flex:1}}>
     <Image
        source={require('../../../image/anhc.jpg')}
        style={{ width: '100%',}}
      />
    </View>
  )
}

export default Chat