import api from '../utils/api';
import {
    GET_CHARACTERS,
    GET_CHARACTER,
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

export const getCharacter = id => async (dispatch) => {
    try {
        const res = await api.get(`http://localhost:5000/api/characters/${id}`);

        dispatch({
            type: GET_CHARACTER,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: CHARACTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
} 

//Create Character
export const createCharacter = formData => async(dispatch) => {
    console.log(JSON.stringify(formData));
    try {
        const res = await api.post('http://localhost:5000/api/characters', formData);
        console.log(res);
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