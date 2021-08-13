import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ICBackDark } from '../../../assets/icon';
import {ILLogo, ILLogoHeader} from '../../../assets/illustration';
import { colors } from '../../../utils/colors';

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if (icon === 'back-dark') {
            return <ICBackDark/>
        }
        if (icon === 'back-light') {
            return <ICBackDark/>;
        }
        return <View style={styles.logo}><ILLogoHeader/></View>;
    };
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon/>
        </TouchableOpacity>
    );
};

export default IconOnly;

const styles = StyleSheet.create({
    logo: {
        marginLeft: 15
    }
})
