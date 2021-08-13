import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button } from '../../components';

const Beranda = () => {
    return (
        <View>
            <Header title='Gekari Kasih Karunia Jemaat Haleluya' type='secondary'/>
            <Text style={styles.content}>halaman Beranda</Text>
            <Button title='tes'/>
        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({
    content: {
        padding: 55,
        paddingTop: 50
    },
})