import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    }

    const {name} = useSelector(state => state.auth)
    
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">Universidade Autónoma de Lisboa || {name}</span>
            <button className="btn btn-outline-primary" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
                <span> Sair</span>
            </button>
        </div>
    )
}
