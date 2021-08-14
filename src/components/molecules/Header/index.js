import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';
import { Button, Gap } from '../../atoms';

const Header = ({onPress, title, type}) => {
    return (
        <View style={styles.container}>
            <Button type='icon-only' onPress={onPress}/>
            <Text style={styles.text(type)}>{title}</Text>
            <Gap type='secondary' width={30}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    text: type => ({
        textAlign: 'center',
        flex: 1,
        fontSize: 15,
        fontFamily: fonts.primary.normal,
        color: type === 'secondary' ? colors.text.tersier : colors.text.primary,
    }),
})
