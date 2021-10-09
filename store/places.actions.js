import * as FileSystem from 'expo-file-system'
import { insertAddress } from '../db'

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

            const result = await insertAddress(
                title,
                path,
                'address',
                13.4,
                10.5
            )
            console.log('En places.action' + result)
            
            dispatch( { type: ADD_PLACE, payload: { 
                id: result.insertId,
                title,
                image: path
            } } )
        } catch (err) {
            console.log(err.message)
            throw err
        }
    }
}