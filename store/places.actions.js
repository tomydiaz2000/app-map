import * as FileSystem from 'expo-file-system'

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const path = FileSystem.documentDirectory + fileName

        try {
            FileSystem.moveAsync({
                from: image,
                to: path
            })
        } catch (err) {
            console.log(err.message)
            throw err
        }
        dispatch( { type: ADD_PLACE, payload: { 
            title,
            image: path
        } } )
    }
}