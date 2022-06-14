import React from 'react';
import { View, Text } from 'react-native';
import { viewStyles, textStyles } from './styles';


const App = () => {
    return (
        <View style={viewStyles.container}>
            <Text style={[textStyles.text, {color : 'green'}]}>Class Styling - Text</Text>
            <Text style={[textStyles.text, textStyles.error]}>Class Styling - Error</Text> 
        </View>
    )
}

export default App;