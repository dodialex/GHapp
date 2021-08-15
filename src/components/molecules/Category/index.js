import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICWartaJemaat, ICJadwalIbadah, ICPersembahan, ICPokokDoa, ICKonseling } from '../../../assets';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

const Category = ({category}) => {
    const Icon = () => {
        if (category === 'Warta Jemaat') {
            return <ICWartaJemaat style={ styles.icon } />
        }
        if (category === 'Jadwal Ibadah') {
            return <ICJadwalIbadah style={ styles.icon }/>
        }
        if (category === 'Persembahan') {
            return <ICPersembahan style={ styles.icon } />
        }
        if (category === 'Pokok Doa') {
            return <ICPokokDoa style={ styles.icon } />
        }
        if (category === 'Konseling') {
            return <ICKonseling style={ styles.icon } />
        }
        return <ICPokokDoa style={ styles.icon } />
    }
    return (
        <View style={styles.card}>
            <Icon/>
            <Text style={styles.category}>{category}</Text>
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
    category: {
        fontSize: 10,
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        height: 30
    }
})
