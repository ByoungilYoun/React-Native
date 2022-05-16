/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './src/home';
 import UserScreen from './src/user';
 
 const Stack = createNativeStackNavigator();
 
 function App() {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="User" component={UserScreen} />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;