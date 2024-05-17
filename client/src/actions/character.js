import api from '../utils/api';
import {
    GET_CHARACTERS,
    CHARACTER_ERROR
} from './type'

//Get Characters
export const getCharacters = () => async (dispatch) => {
    try {
        const res = await api.get('http://localhost:5173/api/characters');

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