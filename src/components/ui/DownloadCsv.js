import React from 'react'
import { CSVLink } from "react-csv";
import { useSelector } from 'react-redux'

export const DownloadEventFab = () => {

    const csvStyle = {
        color: '#fff',
        textDecoration: 'none'
    };

    const {activeEventParticipants, activeEvent} = useSelector(state => state.calendar);
    
    const headers = [
        { label: "Nome", key: "nome" },
        { label: "Apelidos", key: "apelidos" },
        { label: "Email", key: "email" },
        { label: "Instituicao", key: "instituicao" }
      ];

    const csvReport = {
        filename: `${activeEvent.tema}.csv`,
        headers: headers,
        data: activeEventParticipants
    }

    return (
        <button className="btn btn-success fab-success">
            <i className="fas fa-file-download"></i>
            <CSVLink style={csvStyle} {...csvReport}>
                <span> Descarrega Excel</span>
            </CSVLink>
        </button>
    )
}
