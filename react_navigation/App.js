/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/home';
import UserScreen from './src/user';

//const Stack = createStackNavigator(); //screen 이랑 navigator라는 두 개의 property 를 리턴하는 함수 
const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
