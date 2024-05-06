// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import DailyMenuScreen from './src/screens/DailyMenuScreen';
import UpdateMenuScreen from './src/screens/UpdateMenuScreen'; // Importe a tela UpdateMenuScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={DailyMenuScreen} />
        <Stack.Screen name="UpdateMenu" component={UpdateMenuScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
