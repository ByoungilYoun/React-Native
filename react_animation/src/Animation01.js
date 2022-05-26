

 import React, { Component } from 'react';
 import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native';
 
 class AnimaitonOne extends Component {
   constructor() {
       super();
       this.state = {
        mySquare : new Animated.Value(1) // 투명도 1에서 
       }
       
   }

   runAnimation = () => {
    Animated.timing(this.state.mySquare, {
        toValue : 0, // 투명도 0으로 
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
                opacity : this.state.mySquare,
                top : this.state.mySquare.interpolate({
                    inputRange :  [0,1], // constructor 내부와 runAnimation 내부에 선언해둔 property 값이 들어감, 여기선 투명도, 작은값부터
                    outputRange : [700, 0] // 동시에 효과를 내주고싶은 property 값이 들어간다.여기선 y 축 좌표값
                })
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