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
         <View>
          <Text>hello world</Text>
        </View>
        <View>
          <Text>hello world</Text>
        </View>
        <View>
          <Text>hello world</Text>
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
  }
})

export default App;
