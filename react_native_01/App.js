/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { TextInput, Button, View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';
import Steak from './assets/images/steak.jpg'
import Modal from './src/modal';

class App extends Component {

  state = {
    myTextInput : '',
    alphabet : ['a','b','c','d']
}

onChangeInput = (event) => {
    this.setState({
        myTextInput : event
    })
}

  onAddTextInput = () => {
    this.setState(prevState=>{
      return {
        myTextInput : '', // 빈값으로 초기화
        alphabet : [...prevState.alphabet, prevState.myTextInput]
      }
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
       <Modal/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  mainView : {
    flex : 1, // 화면을 채우는 component 들 간의 차지하는 영역의 비율같은걸 나타내는 지표 
    backgroundColor : 'white',
    paddingTop : 50,
    alignItems : 'center', // 수평정렬 
    //justifyContent : 'center' // 수직정렬
  }, 
  subView : {
    backgroundColor : 'yellow',
    marginBottom : 10,
  },
  anotherSubView : {
    flex : 2, //  총 flex는 4이고 1번째 와 2번째는 flex 가 1이니까 4분의 1씩 크기를 차지하고 마지막 3번째는 flex 가 2니까 4분의 2씩 크기를 차지한다.
    backgroundColor : 'yellow',
    marginBottom : 10,
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center'
  },
  mainText : {
    fontSize : 20,
    fontWeight : 'normal',
    color : 'red',
    padding : 20,
    margin : 20,
    backgroundColor : 'pink'
  },
  input : {
    width : '100%',
    backgroundColor : '#cecece',
    marginTop : 20,
    fontSize : 25,
    padding : 10
  },
  image : {
    backgroundColor : 'red',
    width : '100%',
    height : 700
  }
})

export default App;
