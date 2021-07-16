import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { startRegsiter } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: '',
        rApelido: '',
        rEmail: '',
        rPassword1: '',
        rPassword2: ''
    });

    const {rName, rApelido, rEmail, rPassword1, rPassword2} = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (rPassword1 !== rPassword2) {
            return Swal.fire('Error', 'As passwords devem ser iguais');
        }
        dispatch(startRegsiter(rName, rApelido, rEmail, rPassword1));
    }

    return (

        <div className="body-login-registo">
        <div className="center">
        <h1>Registo</h1>
        <form onSubmit={handleRegister}>
            <div className="txt_field">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    name="rName"
                    value={rName}
                    onChange={handleRegisterInputChange}
                />
                <span></span>
                <label>Nome</label>
            </div>

            <div className="txt_field">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Apelidos"
                  name="rApelido"
                  value={rApelido}
                  onChange={handleRegisterInputChange}
              />
                <span></span>
                <label>Apelidos</label>
            </div>

            <div className="txt_field">
              <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="rEmail"
                  value={rEmail}
                  onChange={handleRegisterInputChange}
              />
                <span></span>
                <label>Email</label>
            </div>

            <div className="txt_field">
              <input
                  type="password"
                  className="form-control"
                  placeholder="Palavra-passe" 
                  name="rPassword1"
                  value={rPassword1}
                  onChange={handleRegisterInputChange}
              />
                <span></span>
                <label>Palavra-passe</label>
            </div>

            <div className="txt_field">
              <input
                  type="password"
                  className="form-control"
                  placeholder="Repita a palavra-passe" 
                  name="rPassword2"
                  value={rPassword2}
                  onChange={handleRegisterInputChange}
              />
                <span></span>
                <label> Confirme a sua Palavra-passe</label>
            </div>
            <input 
                type="submit" 
                className="btnSubmit" 
                value="Criar conta" />

            <div className="registo"> Já tem Conta? faça o 
                <Link to="/auth/login"> Login</Link>
            </div>
        </form>
    </div>
        </div>

    )
}