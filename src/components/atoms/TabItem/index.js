import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ICHome, ICHomeActive, ICLokasi, ICLokasiActive, ICUser, ICUserActive } from '../../../assets/icon';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/fonts';

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'Beranda') {
            return active ? <ICHomeActive/> : <ICHome />;
        }
        if (title === 'Lokasi') {
            return active ? <ICLokasiActive/> : <ICLokasi/>;
        }
        if (title === 'Jemaat') {
            return active ? <ICUserActive/> : <ICUser/>;
        }
        return <ICUser/>;
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (active) => (
        {
            fontSize: active ? 15 : 12,
            color: active ? colors.text.menuActive : colors.text.menuInactive,
            fontFamily: fonts.primary.normal
            
        }
    )
})
