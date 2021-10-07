import React, { useState } from "react"
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import { COLORS } from "../constants"

const ImageSelector = props => {
    const [pickedUri, setPickedUri] = useState()

    const handleTakeImage = async () => {
        const isCameraOK = await verifyPermissions()
        if(!isCameraOK) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })

        setPickedUri(image.uri)
        props.onImage(image.uri)
    }

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if(status !== 'granted'){
            Alert.alert(
                'Permisos insuficientes',
                "Necesita dar permisos ed la cámara para usar la aplicación",
                [{text: 'Ok'}]
            )
            return false
        }

        return true
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUri 
                ? <Text>No hay imagen...</Text>
                : <Image style={styles.image}
                    source={{ uri: pickedUri }}/> }
            </View>
            <Button
                title='Tomar foto'
                color={COLORS.LIGTH_PINK}
                onPress={handleTakeImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.BLUSH,
        borderWidth: 1
    },
    image: {
        width: '100%',
        height: '100%'
    } 
})

export default ImageSelector