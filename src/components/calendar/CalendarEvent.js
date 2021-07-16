import React from 'react';

export const CalendarEvent = ({event}) => {
    
    const {tema, sala} = event;

    return (
        <div>
            <strong>{tema}</strong>
            <br />
            <span>Sala: {sala}</span>
        </div>
    )
}
