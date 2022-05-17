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
       <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title : 'Home Screen'}}
        />

       <Stack.Screen 
         name="User" 
         component={UserScreen}
         initialParams={{
          userIdx : 50,
          userName : 'Gildong',
          userLastName : 'Go'
         }}
        //  options={{
        //    title : 'User Screen',
        //    headerStyle : {
        //        backgroundColor : 'pink'
        //    }, 
        //    headerTintColor : 'red',
        //    headerTitleStyle : {
        //      fontWeight : 'bold',
        //      color : 'purple'
        //    }
        //   }} // 헤더 바 타이틀 바꾸기
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 }
 
 export default App;