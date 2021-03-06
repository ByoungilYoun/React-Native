/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import AnimaitonOne from './src/Animation01';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimaitonOne/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container : {
    flex :1,
    backgroundColor : '#fff'
  }
})
export default App;
