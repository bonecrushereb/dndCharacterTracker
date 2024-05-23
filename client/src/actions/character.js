import api from '../utils/api';
import {
    GET_CHARACTERS,
    CREATE_CHARACTER,
    CHARACTER_ERROR
} from './type'

//Get Characters
export const getCharacters = () => async (dispatch) => {
    try {
        const res = await api.get('http://localhost:5000/api/characters');
        dispatch({
            type: GET_CHARACTERS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: CHARACTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//Create Character
export const createCharacter = formData => async(dispatch) => {
    try {
        const res = await api.post('http://localhost:5000/api/characters', formData);
        dispatch({
            type: CREATE_CHARACTER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: CHARACTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}