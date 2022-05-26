/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class App extends Component {
  state = {
    avatar : ''
  }

  addImage = () => {
    // ImagePicker.launchCamera({}, response=>{
    //   this.setState({
    //     avatar : response.uri
    //   })
    // }) // 카메라 켜기

    ImagePicker.launchImageLibrary({

      title : 'Choose your photo'
    }, response=>{
      this.setState({
        avatar : response.uri
      })
    }) // 이미지 라이브러리에서 가져오기 

    // ImagePicker.showImagePicker({}, response=>{
    //   this.setState({
    //     avatar : response.uri
    //   })
    // }) // 이미지 라이브러리에서 가져오기 
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:this.state.avatar}}
          style={styles.avatar}
        />

        <Button
          title="Add an Image"
          onPress={()=>this.addImage()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#e4ab26'
  },
  avatar : {
    width : '100%',
    height : 400
  }
})

export default App;
