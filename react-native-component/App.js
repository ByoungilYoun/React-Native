import { StatusBar } from 'expo-status-bar';
import React, {Fragment} from 'react';
import { Text } from 'react-native';

export default function App() {
  return (
    <Fragment>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </Fragment>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
