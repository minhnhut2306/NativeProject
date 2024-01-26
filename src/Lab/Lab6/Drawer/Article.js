import { View, Text,Image } from 'react-native'
import React from 'react'

const Article = () => {
  return (
    <View>
     <Image source={require('../../../image/anha.jpg')} style={{width:'100%', height:'100%'}}/>
    </View>
  )
}

export default Article