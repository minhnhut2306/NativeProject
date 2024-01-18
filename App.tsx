import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab4bai2 from './src/Lab/Lab4/Lab4bai2';
import Lab4 from './src/Lab/Lab4/Lab4';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lab4'>
        <Stack.Screen name="Lab4" component={Lab4} />
        <Stack.Screen name="Lab4bai2" component={Lab4bai2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
