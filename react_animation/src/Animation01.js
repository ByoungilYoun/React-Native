

 import React, { Component } from 'react';
 import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native';
 
 class AnimaitonOne extends Component {
   constructor() {
       super();
       this.state = {
        mySquare : new Animated.Value(1)
       }
       
   }

   runAnimation = () => {
    Animated.timing(this.state.mySquare, {
        toValue : 0,
        duration : 2000, // 2초
        delay : 1500, // 1.5초 후에 동작
        // easing : Easing.bounce // 마지막 위치에서 통통 튀는 효과
        // easing : Easing.elastic(3) // 더 멀리 갔다가 엔딩포인트에 수렴
    }).start();
   }

   render() {
     return (
         <View>
         <Animated.View
        //  style={this.state.mySquare.getLayout()}
            style={{
                opacity : this.state.mySquare
            }}
         >
            <View style={styles.square}>
            </View>
         </Animated.View>
 
        <Button
            title="Animation Start"
            onPress={this.runAnimation}
        />
         </View>
     )
   }
 }
 

 const styles = StyleSheet.create({
     square : {
         width : 100,
         height : 100,
         backgroundColor : 'skyblue'
     }
 })

 export default AnimaitonOne