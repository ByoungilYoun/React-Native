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
import PropsChild from './propsChild';

class App extends Component {

  state = { // state 는 render 함수 위에 작성
    sampleText : 'Hello World',
    sampleBoolean : false,
    sampleNum : 1
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

  // onAdd = () => {
  //   this.setState({
  //     // sampleNum : sampleNum + 1  // 이렇게 하면 에러남. setState 를 통한 데이터 변경을 위해서는 현재 버전을 카피 하고 업데이트를 진행, 이걸 하기 위해서 prevState 라는 현재 버전의 state 값을 setState 의 인자로 넣으면 된다.
  //   })
  // }

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum : prevState.sampleNum + 1
      }
    })
  }

  render() {
    return (
      <View style={styles.background}>
        <PropsChild propsChildSampleText={this.state.sampleText} propsChildChangeSate={this.changeState}/>
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
