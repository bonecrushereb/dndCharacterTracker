import {
    GET_CHARACTERS,
    CHARACTER_ERROR
} from '../actions/type';

const initialState = {
    characters: [],
    character: {},
    error: {}
}

function characterReducer(state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload
            };
        case CHARACTER_ERROR:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}

export default characterReducer;