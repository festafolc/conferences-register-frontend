import {types} from "../types/types";


const initialState = {

    events: [],
    activeEvent: null
}

export const participantReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.participantEventLoadedWithoutToken:
            return {
                ...state,
                events: [...action.payload]
            }
        case types.participantEventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.participantRegistration:
            return {
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                ),
                activeEvent: null
            }
        default:
            return state;
    }
}