/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import { View, Text , Button } from 'react-native';

class UserScreen extends Component {
    render() {

        const {params} = this.props.route; // 이 스크린의 route 값을 설정해준다.
        const userIdx = params ? params.userIdx : null;
        const userName = params ? params.userName : null;
        const userLastName = params ? params.userLastName : null;

        return (
            <View style={{
                flex : 1,
                alignItems: 'center', 
                justifyContent : 'center'
            }}>
                <Text>User Screen</Text>
                <Button
                    title="To Home Screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                />

                <Text>User Idx :  {JSON.stringify(userIdx)}</Text>
                <Text>User Name :  {JSON.stringify(userName)}</Text>
                <Text>User LastName :  {JSON.stringify(userLastName)}</Text>
            </View>
        )
    }
}

 
 export default UserScreen;