import {types} from "../types/types";


const initialState = {

    events: [],
    activeEventParticipants: [],
    activeEvent: null
}

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.eventParticipantsSetActive:
            return {
                ...state,
                activeEventParticipants: action.payload.conference_participants,
            }
        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEventParticipants: [],
                activeEvent: null
            }
        case types.eventUpdate:
            return {
                ...state,
                events: state.events.map(
                    e => (e.id === action.payload.id) ? action.payload : e
                )
            }
        case types.eventDelete:
            return {
                ...state,
                events: state.events.filter(
                    e => (e.id !== state.activeEvent.id)
                ),
                activeEvent: null
            }
        case types.eventLoaded:
            return {
                ...state,
                events: [...action.payload]
            }
        case types.eventDownloaded:
            return {
                ...state,
                activeEventParticipants: action.payload.conference_participants
            }
        case types.eventLogout:
            return {
                ...initialState
            }
        default:
            return state;
    }
}