import React, { useEffect, useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { messages } from '../../helpers/calendar-messages-pt';
import { Navbar } from '../ui/Navbar';
import { uiOpenModal } from '../../actions/ui';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/pt';
import { eventClearActiveEvent, eventStartActiveEvent, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DownloadEventFab } from '../ui/DownloadCsv';
import './styles/calendarScreen.css'

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();

    const {events, activeEvent} = useSelector(state => state.calendar);

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch])

    const onDoubleClick = (e) => {
        dispatch(uiOpenModal(e));
    }

    const onSelectEvent = (e) => {
        dispatch(eventStartActiveEvent(e));
    }

    //Mantem a última vista do calendário para o usuário
    const onViewChange = (e) => {
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = () => {
        dispatch(eventClearActiveEvent())
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />
            {
                (activeEvent) && <DownloadEventFab />
            }
            <AddNewFab />
            <CalendarModal />
        </div>
    )
}
