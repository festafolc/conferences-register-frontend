import Swal from "sweetalert2";
import { types } from "../types/types";
import { fetchWithoutToken } from "../helpers/fetch";


export const participantEventSetActive = (event) => ({
    type: types.participantEventSetActive,
    payload: event
});


export const participantStartRegister = (nome, apelidos, email, instituicao) => {
    return async (dispatch, getState) => {

        const {id} = getState().participant.activeEvent;

        const resp = await fetchWithoutToken(`conferencias_ual/inscricao/${id}`, {nome, apelidos, email, instituicao}, 'POST');
        const body = await resp.json();

        if (body.ok) {
            dispatch(participantRegister());
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}


const participantRegister = () => ({
    type: types.participantRegistration
});