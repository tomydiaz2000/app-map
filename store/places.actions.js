import * as FileSystem from 'expo-file-system'
import { insertAddress, fetchAddress } from '../db'

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

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

export const loadAdress = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress()
            console.log(result)

            dispatch({
                type: LOAD_PLACES,
                places: result.rows._array
            })
        } catch(error){
            console.log(error.message)
            throw error
        }
    }
}