/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class App extends Component {

  state = { // state 는 render 함수 위에 작성
    sampleText : 'Hello World',
    sampleBoolean : false
  }

  inputText = () => ( //inputText 함수 작성 
    this.state.sampleBoolean ?
      <Text>sampleBoolean is true</Text>
    : 
      <Text>sampleBoolean is false</Text>
  )

  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText : 'Text Changed!!!',
        sampleBoolean : true 
      })
    } else {
      this.setState({
        sampleText : 'Hello World!!!',
        sampleBoolean : false 
      })
    } 
  }

  render() {
    return (
      <View style={styles.background}>
        <Text onPress={this.changeState}>
          {this.state.sampleText}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background : {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center'
  }
})

export default App;
