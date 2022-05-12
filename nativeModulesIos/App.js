
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { exp } from 'react-native/Libraries/Animated/Easing';
// import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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

// const App = props => {
//   return (
//     <View style={StyleSheet.container}>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App;

// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//     backgroundColor : '#fff',
//     alignItems : 'center',
//     justifyContent : 'center'
//   }
// })

