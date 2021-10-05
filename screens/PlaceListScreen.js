import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HeaderButton from '../components/HeaderButton'

const PlaceListScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Direcciones</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceListScreen
