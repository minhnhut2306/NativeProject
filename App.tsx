import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import Lab4bai1 from './src/Lab/Lab4/Lab4';
function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
       <Lab4bai1/>
      </View>
    </SafeAreaView>
  );
}
export default App;