import React, {useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button } from '../../components'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000);
    }, [navigation]);
    return (
        <View style={styles.page}>
            <ILLogo />
            <Button />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
