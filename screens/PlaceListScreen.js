import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'

const PlaceListScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Nueva"
                        iconName="md-add"
                        onPress={() => navigation.navigate('Nuevo')} />
                </HeaderButtons>
            )
        })
    }, [navigation])

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
