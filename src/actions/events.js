import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";


// Grava na base de dados
export const eventStartAddNew = (event) => {
    return async (dispatch) => {
        
        try {
            const resp = await fetchWithToken('conferencias_autonoma', event, 'POST');
            const body = await resp.json();

            if (body.ok) {
                event.id = body.conference.id;
                event.start = body.conference.start;
                event.end = body.conference.end
                dispatch(eventAddNew(event));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventStartActiveEvent = (event) => {
    return async(dispatch) => {
        
        try {
            const resp = await fetchWithToken(`conferencias_autonoma/${event.id}`);
            const body = await resp.json();
            dispatch(eventParticipantsSetActive(body));
            dispatch(eventSetActive(event));
        } catch (error) {
            console.log(error);
        }
    }
}

const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

const eventParticipantsSetActive = (event) => ({
    type: types.eventParticipantsSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({type: types.eventClearActiveEvent});

export const eventStartupdate = (event) => {
    return async(dispatch) => {
        try {
            const resp = await fetchWithToken(`conferencias_autonoma/${event.id}`, event, 'PUT');
            const body = await resp.json();
            if (body.ok) {
                dispatch(eventUpdate(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventUpdate = (event) => ({
    type: types.eventUpdate,
    payload: event
});


export const eventStartDelete = () => {
    return async (dispatch, getState) => {

        const {id} = getState().calendar.activeEvent;

        try {
            const resp = await fetchWithToken(`conferencias_autonoma/${id}`, {}, 'DELETE');
            const body = await resp.json();
            if (body.ok) {
                dispatch(eventDelete());
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}


const eventDelete = () => ({type: types.eventDelete});

export const eventStartLoading = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchWithToken('conferencias_autonoma');
            const body = await resp.json();
            const events = prepareEvents(body.conferences);
            
            dispatch(eventLoaded(events));
        } catch (error) {
            console.log(error);
        }
    }
}

const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
});

export const eventStartLoadingWithouToken = () => {
    return async (dispatch) => {

        try {
            const resp = await fetchWithoutToken('conferencias_ual/conferencias');
            const body = await resp.json();
            const events = prepareEvents(body.conferences);

            dispatch(participantEventLoadedWithoutToken(events));
        } catch (error) {
            console.log(error);
        }
    }
}

const participantEventLoadedWithoutToken = (events) => ({
    type: types.participantEventLoadedWithoutToken,
    payload: events
});
    
    
export const eventLogout = () => ({
    type: types.eventLogout
});