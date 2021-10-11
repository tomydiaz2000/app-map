import React, {useState, useEffect } from "react"
import {
    View,
    Button,
    Text,
    ActivityIndicator,
    Alert,
    StyleSheet
} from 'react-native'
import * as Location from 'expo-location'

import COLORS from "../constants/Colors"

const LocationSelector = props => {
    const [isFetching, setIsFetching] = useState(false)
    const [location, setLocation] = useState(null)
    const [pickedLocation, setPickedLocation] = useState()

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if(status !== 'granted'){
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de la localización para usar la aplicación',
                [{ text: 'Ok'}]
            )

            return false
        }

        return true
    }

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions()

        if(!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        })

        console.log(location)

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedLocation
                    ? <Text>Location en proceso...</Text>
                    : <Text>Latitud: {pickedLocation.lat} - Longitud: {pickedLocation.lng}</Text>
                }
            </View>
            <Button 
                title='Obtener Ubicación'
                color={COLORS.PEACH_PUFF}
                onPress={handleGetLocation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS.BLUSH,
        borderWidth: 1
    }
})

export default LocationSelector