import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import Lab4bai2 from './src/Lab/Lab4/Lab4bai2';
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
       <Lab4bai2/>
      </View>
    </SafeAreaView>
  );
}
export default App;