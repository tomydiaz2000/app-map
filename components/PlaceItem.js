import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { COLORS } from "../constants"

const PlaceItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}
            style={styles.placeItem}>
            <Image style={styles.image}
                source={{uri: props.image}}/>
            <View style={styles.info}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.address}>{props.address}</Text>
            </View>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 25,
        backgroundColor: COLORS.PEACH_PUFF
    },
    info: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: COLORS.BLUSH,
        fontSize: 18,
        marginBottom: 6
    },
    address: {
        color: '#666',
        fontSize: 16
    }
})

export default PlaceItem