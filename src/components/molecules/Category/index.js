import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICWartaJemaat } from '../../../assets';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

const Category = () => {
    return (
        <View style={styles.card}>
            <ICWartaJemaat style={ styles.icon }/>
            <Text style={styles.label}>Persembahan</Text>
        </View>
    )
}

export default Category;

const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: colors.cardPutih,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 15,
        width: 70,
        marginBottom: 20
    },
    icon: {
        marginBottom: 15
    },
    label: {
        fontSize: 10,
        fontFamily: fonts.primary[400],
        color: colors.text.primary
    }
})
