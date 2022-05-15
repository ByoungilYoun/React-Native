/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { View, Text, Button, Modal} from 'react-native';
 
 class ModalComponent extends Component {

    state = {
        modal : false 
    }

    handleModal = () => { // 모달 상태가 true 인지 false 인지, 즉 화면상 가장 위에 있는 레이어를 만들지 말지 정하는 함수 
        this.setState({
            modal : this.state.modal ? false : true
        })
    }

   render() {
     return (
        <View style={{width : '100%'}}>
           <Button
                title="Open Modal"
                onPress={this.handleModal}
           />

           <Modal
            visible={this.state.modal} // true 값일때만 modal 이 보인다.
            animationType={'slide'} // none, slide, fade 
            onShow={()=>alert("Warning")} // 모달창이 떴을때 트리거 되는 함수 
           >
               <View style={{
                   marginTop : 60,
                   backgroundColor : 'red'
               }}>
                   <Text>This is modal content</Text>
               </View>

               <Button
                title="Go Back"
                onPress={this.handleModal}
           />
           </Modal>
        </View>
     )
   }
 }
 
 export default ModalComponent;
 