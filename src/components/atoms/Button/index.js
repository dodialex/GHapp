import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import IconOnly from './IconOnly'

const Button = ({type, title, onPress, icon}) => {
    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress}/>
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: type => (
        {
            backgroundColor: type === 'secondary' ? colors.button.secondary : colors.button.primary,
            paddingVertical: 8,
            borderRadius: 8,
        }),
    text:  type => (
        {
            fontSize: 15, 
            fontFamily: fonts.primary[600],
            textAlign: 'center',
            color: type === 'secondary' ? colors.primary : colors.white
        }),
})
