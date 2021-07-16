import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import DateTimePicker from 'react-datetime-picker';
import Modal from "react-modal";
import moment from 'moment';
import Swal from 'sweetalert2';
import {uiCloseModal} from "../../actions/ui";
import {eventClearActiveEvent, eventStartAddNew, eventStartupdate} from "../../actions/events";

import './styles/calendarModal.css';
import { DeleteEventFab } from "../ui/DeleteEventFab";


const customStyles = {
  content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0);
const nowPlus1 = now.clone().add(1, 'hours');


const initEvent =  {
    tema: '',
    descricao: '',
    sala: '',
    start: now.toDate(),
    end: nowPlus1.toDate(),
    link: ''
}



export const CalendarModal = () => {

    const {modalOpen} = useSelector(state => state.ui);
    const {activeEvent} = useSelector(state => state.calendar);

    const dispatch = useDispatch()

    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

    const [valid, setValid] = useState(true);

    const [formValues, setFormValues] = useState(initEvent);

    const {tema, descricao, sala, start, end, link} = formValues;

    useEffect(() => {
        if (activeEvent) {
            setFormValues(activeEvent);
        } else {
            setFormValues(initEvent);
        }
    }, [activeEvent, setFormValues]);

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const closeModal = () => {
        dispatch(uiCloseModal());
        dispatch(eventClearActiveEvent());
        setFormValues(initEvent);
    };

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire('Atençao', 'A data fin deve ser superior à data de início');
        }

        if (tema.trim().length < 2) {
            return setValid(false);
        }

        if (descricao.trim().length < 2) {
            return setValid(false);
        }

        if (sala.trim().length < 1) {
            return setValid(false);
        }

        if (activeEvent) {
            //Editar evento
            dispatch(eventStartupdate(formValues));
        } else {
            // Criar evento
            dispatch(eventStartAddNew(formValues));
        }

        setValid(true);
        closeModal();

    }
    

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        >
        <h4> {(activeEvent) ? 'Editar conferência' : 'Nova conferência'}</h4>
        {
            (activeEvent) && <DeleteEventFab />
        }
        <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
            <label>Data e hora de início </label>
            <DateTimePicker
                onChange={handleStartDateChange}
                className="form-control"
                name="start"
                format="dd-MM-yyyy HH:mm:ss"
                value={dateStart}
                minDate={new Date(now)}
            />
            </div>

            <div className="form-group">
            <label>Data e hora de fim</label>
            <DateTimePicker
                onChange={handleEndDateChange}
                className="form-control"
                name="end"
                format="dd-MM-yyyy HH:mm:ss"
                value={dateEnd}
                minDate={dateStart}
            />
            </div>
            <div className="form-group">
            <label>Tema</label>
            <input
                type="text"
                className={`form-control ${!valid && 'is-invalid'}`}
                placeholder="Tema da conferência"
                name="tema"
                autoComplete="off"
                value={tema}
                onChange={handleInputChange}
            />
            </div>
            <label>Descriçao</label>
            <div className="form-group">
            <textarea
                type="text"
                className={`form-control ${!valid && 'is-invalid'}`}
                placeholder="Descriçao"
                rows="5"
                name="descricao"
                value={descricao}
                onChange={handleInputChange}
            ></textarea>
            </div>
            <div className="form-group">
            <label>Sala</label>
            <input
                type="text"
                className={`form-control ${!valid && 'is-invalid'}`}
                placeholder="Sala"
                name="sala"
                autoComplete="off"
                value={sala}
                onChange={handleInputChange}
            />
            </div>
            <div className="form-group">
            <label>Link</label>
            <input
                type="text"
                className={'form-control'}
                placeholder="Link da conferência"
                name="link"
                autoComplete="off"
                value={link}
                onChange={handleInputChange}
            />
            </div>
            <br />
            <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
            </button>
        </form>
        </Modal>
    );
};
