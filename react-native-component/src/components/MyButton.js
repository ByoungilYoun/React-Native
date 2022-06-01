import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const MyButton = props => {
    console.log(props)

    return (
        <TouchableOpacity
            style={{
                backgroundColor : '#3498db',
                padding : 16,
                margin : 10,
                borderRadius : 8,
            }}
            onPress={() => alert('Click !!!')}
        >
            <Text style={{ color : 'white' ,fontSize : 24 }}>{props.children || props.title}</Text>
        </TouchableOpacity>
    )
}

MyButton.defaultProps = {
    title : 'Button'
}

export default MyButton;