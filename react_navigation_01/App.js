/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { View, Text, StyleSheet, Image, Button } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import HomeScreen from './src/home';
 import UserScreen from './src/user';
 import LogoTitle from './src/logo';
 import 'react-native-gesture-handler';
 
 const Stack = createNativeStackNavigator();
 
 function App() {

  logoTitle = () => {
    return  (
      <Image
        style={{width : 40, height : 40}}
        source={require('./src/assets/pics/home_icon.png')}
      />
    )
  }

   return (
     <NavigationContainer>
       <Stack.Navigator
           screenOptions={{ // Stack.Navigator 안에 screenOptions 으로 스타일을 주면 모든 속성에 공통적으로 줄 수가 있다. 
           headerStyle : {
               backgroundColor : '#a4511e'
           }, 
           headerTintColor : '#fff',
           headerTitleStyle : {
             fontWeight : 'bold',
             color : '#f3d612'
           }
          }} // 헤더 바 타이틀 바꾸기
       >
       <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title : 'Home Screen',
            headerTitle : <LogoTitle/>,
            headerRight : () => (
              <Button
                title="Info"
                onPress={() => alert('I am a buton!!')}
                color='orange'
              />
            )
          }}
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