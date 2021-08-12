import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from '../../components'

const SplashCopy = () => {
    return (
        <View style={styles.page}>
            <Button />
        </View>
    )
}

export default SplashCopy

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
