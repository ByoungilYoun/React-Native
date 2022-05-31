import React from 'react';
import { Text, View, Button } from 'react-native';

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
        <Text style={{ fontSize : 30, marginBttom : 10 }}>Button Component</Text>
        <Button 
            title="Button"
            onPress={() => alert('Click!!!')}
        >
        </Button>
        </View>
    )
}

export default App;