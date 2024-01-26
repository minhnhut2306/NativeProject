import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab4bai2 from './src/Lab/Lab4/Lab4bai2';
import Lab4 from './src/Lab/Lab4/Lab4';
import Lab5bai1 from './src/Lab/Lab5/Lab5bai1';
import Lab5bai2 from './src/Lab/Lab5/Lab5bai2';
import Lab5bai3 from './src/Lab/Lab5/Lab5bai3';
import Lab6bai1 from './src/Lab/Lab6/Lab6bai1';
import Lab6bai2 from './src/Lab/Lab6/Lab6bai2';
import Detail from './src/Lab/Lab6/Detail';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lab6bai2'>
        <Stack.Screen name="Lab4" component={Lab4} />
        <Stack.Screen name="Lab4bai2" component={Lab4bai2} options={{ headerShown: false }} />
        <Stack.Screen name="Lab5bai1" component={Lab5bai1} options={{ headerShown: false }}/>
        <Stack.Screen name="Lab5bai2" component={Lab5bai2} options={{ headerShown: false }} />
        <Stack.Screen name="Lab5bai3" component={Lab5bai3} options={{ headerShown: false }}/>
        <Stack.Screen name="Lab6bai1" component={Lab6bai1} options={{ headerShown: false }}/>
        <Stack.Screen name="Lab6bai2" component={Lab6bai2} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
