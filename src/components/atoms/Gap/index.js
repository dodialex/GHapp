import React from 'react';
import { View } from 'react-native';

const Gap = ({type,height,width}) => {
    if (type === 'secondary'){
        return <View style={{width:-30}}/>
    }
    return <View style={{height:height, width:width}}/>;
};

export default Gap