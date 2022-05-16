import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';

//const Stack = createStackNavigator(); //screen 이랑 navigator라는 두 개의 property 를 리턴하는 함수 
const Stack = createNativeStackNavigator();

class HomeScreen extends Component {
  render() {
    return(
        <View>
            <Text>Home Screen</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({

});

export default HomeScreen;
