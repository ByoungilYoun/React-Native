
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NumList = (props) => {
    return (
        props.num.map((item, idx) =>(
            <View style={styles.numlist} key={idx}>
             <Text>{item}</Text>
            </View>
        ))
       
    )
}


const styles = StyleSheet.create({
  numlist : {
      backgroundColor : '#cecece',
      alignItems : 'center',
      padding: 5,
      width : '100%',
      marginTop : 5
  }
})

export default NumList;