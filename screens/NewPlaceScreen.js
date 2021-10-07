import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import { useDispatch } from 'react-redux'
import { COLORS } from '../constants' 
import ImageSelector from '../components/ImageSelector'
import { addPlace } from '../store/places.actions'

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch() 

    const [imageUri, setImageUri] = useState()
    const [title, setTitle] = useState('') 

    const handleTitleChange = text => setTitle(text)
    const handleSave = () => {
        dispatch(addPlace(title, imageUri))
        navigation.navigate('Direcciones')
    }
    const handlePickImage = (uri) => {
        setImageUri(uri)
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput style={styles.input} 
                    onChangeText={handleTitleChange}/>

                <ImageSelector onImage={handlePickImage}/>

                <Button 
                    title="Grabar Dirección"
                    color={COLORS.MAROON}
                    onPress={handleSave}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewPlaceScreen
