import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Generator = (props) => {
    return (
        <View style={styles.generator}>
            {/* // title(버튼의 제목) 이라는 property 가 필수적으로 들어가야 한다.  */}
            <Button 
                title="Add Number" 
                onPress={() => props.add()}
            />  
          
        </View>
    )
}


const styles = StyleSheet.create({
  generator : {
      backgroundColor : '#123456',
      alignItems : 'center',
      padding: 5,
      width : '100%'
  }
})

export default Generator;