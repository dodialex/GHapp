import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DummyNews1 } from '../../../assets';
import { fonts } from '../../../utils/fonts';
import { colors } from '../../../utils/colors';

const NewsItem = ({label, title, image, link}) => {
    return (
        <View style={styles.content}>
            <Image source={{uri:image}} style={styles.image}/>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.cardPutih,
        width: 250,
        flex: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 20
    },
    image: {
        width: 250,
        height: 140
    },
    label: {
        marginTop: 10,
        fontSize: 12,
        marginHorizontal: 10,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary
    },
    title: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        marginHorizontal: 10,
        marginBottom: 10

    }
})
