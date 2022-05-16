
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { exp } from 'react-native/Libraries/Animated/Easing';
import {NativeModules} from 'react-native'

console.log(NativeModules.Counter);
NativeModules.Counter.increment();
console.log(NativeModules.Counter.getConstants)

class App extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text>Hello World</Text>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  background : {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center'
  }
})