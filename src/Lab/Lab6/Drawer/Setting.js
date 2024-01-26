import { View, Text,Image} from 'react-native'
import React from 'react'

const Setting = () => {
  return (
    <View style={{backgroundColor:'black', flex:1}}>
     <Image
        source={require('../../../image/anhb.jpg')}
        style={{ width: '100%',}}
      />
    </View>
  )
}

export default Setting