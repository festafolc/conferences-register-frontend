import moment from 'moment';

// Necessário para convertir as datas em tipo Date
export const prepareEvents = (events = []) => {

    return events.map(
        (e) => ({
            ...e,
            end: moment(e.end).toDate(),
            start: moment(e.start).toDate()
        })
    )
}