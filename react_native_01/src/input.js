/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { View, Text, StyleSheet, TextInput} from 'react-native';
 
 class Input extends Component {
 
    state = {
        myTextInput : ''
    }

    onChangeInput = (event) => {
        this.setState({
            myTextInput : event
        })
    }

   render() {
     return (
      <View style={styles.mainView}>
        <TextInput 
            value={this.state.myTextInput}
            style={styles.input}
            onChangeText={this.onChangeInput} // 위에서 만든 onChangeInput 함수를 통해서 텍스트필드에 입력값 판별
            multiline={true} // 라인 늘어남
            maxLength={10} // 글자수 제한
            autoCapitalize={'none'} // 문장 첫글자 대문자 방지 (소문자로)
            editable={true} // 입력 가능한지 안한지
      />
      </View>
     )
   }
 }
 
 const styles = StyleSheet.create ({

    mainView : {
        width : '100%'
    },

    input : {
        width : '100%',
        backgroundColor : '#cecece',
        marginTop : 20,
        fontSize : 25,
        padding : 10
    }
 })
 
 export default Input;
 