import React from 'react';
import { View, Text, Button } from 'react-native';
import MyButton from './components/MyButton';
import Counter from './components/Counter';
import EventButton from './components/EventButton';

const App = () => {
    return (
        <View
            style={{
                flex : 1,
                backgroundColor : '#fff',
                alignItems : 'center',
                justifyContent : 'center',
            }}
        >
        {/* <Text style={{ fontSize : 30, marginBottom : 10 }}>Props</Text>
        <MyButton title = "Button" />
        <MyButton title = "Button">Children Props</MyButton>
        <MyButton/> */}
        {/* <Counter/> */}
        <EventButton/>
        </View>
    )
}

export default App;