/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

 const Header = (props) => (
     <TouchableOpacity
        style={styles.header}
        // onPress={()=>alert('hello world')}
        // onLongPress={()=>alert('hello world')} // 길게 눌러야 반응 
        // onPressIn={()=>alert('hello world')} // 누르자 마자 즉각적 반응을 보임
        onPressOut={()=>alert('hello world')} // 터치했다가 손을 놓았을때 반응
     >
        <View style={styles.header}>
         <Text>{props.name}</Text>
        </View>
     </TouchableOpacity>

//    <TouchableWithoutFeedback
//    onPress={()=>alert('hello world')}
//    >
//    <View style={styles.header}>
//     <Text>{props.name}</Text>
//    </View>
//    </TouchableWithoutFeedback>

 )


 const styles = StyleSheet.create({
     header : {
         backgroundColor : 'pink',
         alignItems : 'center',
         padding : 5,
         width : '100%'
     }
 })

 export default Header;