/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';
import Input from './src/input';

class App extends Component {


  state = {
    appName : 'My First App',
    random : [36, 999]
  }

  // 클릭하면 랜덤 숫자 생성 
  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random()*100+1)
    this.setState(prevState => {
      return {
        random : [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })

    this.setState({
      random : newArray
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
         {/* <Header name={this.state.appName}/>
         <View>
          <Text 
          style={styles.mainText}
          onPress={()=>alert('text touch event')} // text 에 터치 이벤트 주기
          >Hello World</Text>
         </View>
        <Generator add={this.onAddRandomNum}/>

        <ScrollView
          style={{width : '100%'}}
         // onMomentumScrollBegin={()=>alert('begin')} //onMomentumScrollBegin : 스크롤이 움직이기 시작했을때(스크롤을 올리거나 내렸을때 이후 스스로 잠깐 움직일때) trigger 해주는 함수
         //onMomentumScrollEnd={()=>alert('begin')} // 스크롤의 움직임이 멈췄을때 트리거 해주는 함수 
         //onScroll={()=>alert('scrolling')} // 스크롤을 움직였을때 (1px 이라도) 바로 trigger 해주는 함수 
         //onContentSizeChange={(width, height)=>alert(height)} // 버튼을 눌를때마다 height 값이 표현됨
          bounces={false} // 스크롤을 맨위로, 맨밑으로 내렸을때 통통 튀는 효과
        >
          <NumList 
            num={this.state.random}
            delete={this.onNumDelete}
          />
        </ScrollView> */}
        <Input/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  mainView : {
    flex : 1, // 화면을 채우는 component 들 간의 차지하는 영역의 비율같은걸 나타내는 지표 
    backgroundColor : 'white',
    paddingTop : 50,
    alignItems : 'center', // 수평정렬 
    //justifyContent : 'center' // 수직정렬
  }, 
  subView : {
    backgroundColor : 'yellow',
    marginBottom : 10,
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
    fontSize : 20,
    fontWeight : 'normal',
    color : 'red',
    padding : 20
  }
})

export default App;
