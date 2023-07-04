import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from "./conrols-actions"

const initialState = {
    search: '',
    region: ''
}

export const controlsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CLEAR_CONTROLS:
            return {
                initialState
            }
        case SET_REGION:
            return {
                ...state,
                region: payload
            }
        case SET_SEARCH:
            return {
                ...state,
                search: payload
            }
        default:
            return state
    }
}