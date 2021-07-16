import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: '',
        lPassword: ''
    });

    const {lEmail, lPassword} = formLoginValues;


    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

   
    return (
        <>

<div className="body-login-registo">
            <div className="center">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="txt_field">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="lEmail"
                        value={lEmail}
                        onChange={handleLoginInputChange}
                    />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Palavra-passe"
                            name="lPassword"
                            value={lPassword}
                            onChange={handleLoginInputChange}
                        />
                        <span></span>
                        <label>Palavra-passe</label>
                    </div>
                    <input 
                        type="submit"
                        className="btnSubmit"
                        value="Login" 
                    />
                    <div className="registo">Ainda não tem conta? <br />
                        <Link to="/auth/registo">Criar conta</Link>
                    </div>
                </form>
            </div>
            <div className="botao">
                <Link to=""> Pagina principal</Link>
            </div>
            </div>
        </>
    )
}