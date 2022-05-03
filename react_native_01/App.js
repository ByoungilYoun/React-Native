/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
         <View style={styles.subView}>
          <Text style={styles.mainText}>hello world</Text>
        </View>
        <View style={styles.subView}>
          <Text>hello world</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text style={styles.mainText}>hello world</Text>
        </View>
      </View>
     
    )
  }
}

const styles = StyleSheet.create ({
  mainView : {
    flex : 1, // 화면을 채우는 component 들 간의 차지하는 영역의 비율같은걸 나타내는 지표 
    backgroundColor : 'green',
    paddingTop : 50,
    alignItems : 'center', // 수평정렬 
    justifyContent : 'center' // 수직정렬
  }, 
  subView : {
    flex : 1,
    backgroundColor : 'yellow',
    marginBottom : 10,
    width : '50%'
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
    fontSize : 50,
    fontWeight : 'bold',
    color : 'red',
    padding : 20
  }
})

export default App;
