import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { participantStartRegister } from '../../actions/participant';
import { useForm } from '../../hooks/useForm';
import { useTranslation } from 'react-i18next';

import './styles/registrationScreen.css';
import { Link } from 'react-router-dom';


export const RegistrationScreen = () => {

    const dispatch = useDispatch();

    const {activeEvent} = useSelector(state => state.participant);


    const [formRegisterValues, handleRegisterInputChange] = useForm({
        nome: '',
        apelidos: '',
        email: '',
        instituicao: ''
    });

    const {nome, apelidos, email, instituicao} = formRegisterValues;

    const handleRegisterForm = (e) => {
        e.preventDefault();
        if (activeEvent) {
            dispatch(participantStartRegister(nome, apelidos, email, instituicao));
            Swal.fire({
                icon: 'success',
                title: 'Registo confirmado',
                text: 'Email de confirmaçao enviado',
                showConfirmButton: false
            });
        }
    }

    const {t} = useTranslation();

    return (
        <>
            <section>
                <div className="header container3">
                    <div className="nav-bar2 container">
                        <div className="brand2">
                            <Link to="/conferencias_ual/"><h1><span>U</span>AL</h1></Link>
                        </div>
                        <h1 className="title-list-conferences">{t("cfNavbar")}</h1>
                    </div>
                </div>
            </section>
            <section className="get_in_touch">
                <h1 className="title">{t("rsFillTheForm")}</h1>
                <div id="error_message"></div>
                <form onSubmit={handleRegisterForm} action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeqtGGO8kl9cGaa2uR1E8OI-Y9te08x7QkSuGYPJ64bo27eaA/formResponse">
                    <div className="container">
                        <div className="contact-form row">
                            <div className="form-field col-lg-6">
                                <input id="nome" className="input-text" type="text" name="nome" value={nome} onChange={handleRegisterInputChange}/>
                                <label htmlFor="name" className="label">{t("rsName")}</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input id="sobrenome" className="input-text" type="text" name="apelidos" value={apelidos} onChange={handleRegisterInputChange}/>
                                <label htmlFor="sobrenome" className="label">{t("rsSurname")}</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input id="email" className="input-text" type="email" name="email" value={email} onChange={handleRegisterInputChange}/>
                                <label htmlFor="email" className="label">{t("informationsEmail")}</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input id="instituicao" className="input-text" type="instituicao" name="instituicao" value={instituicao} onChange={handleRegisterInputChange}/>
                                <label htmlFor="instituicao" className="label">{t("rsInstituition")}</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input type="submit" name="submit"  className="submit-btn" value={t("rsSubmit")} />
                            </div>
                        </div>  
                    </div>
                </form>
            </section>
            <br />
            <section className="container social-icons">
                <a className="social-icon-link facebook" href="https://www.facebook.com/autonoma.pt/"><i className="fab fa-facebook-f"></i></a>
                <a className="social-icon-link instagram" href="https://www.instagram.com/universidadeautonomadelisboa/"><i className="fab fa-instagram"></i></a>
                <a className="social-icon-link youtube" href="https://twitter.com/autonomalisboa"><i className="fab fa-youtube"></i></a>
                <a className="social-icon-link twitter" href="https://www.youtube.com/channel/UCXIosvTTg5glzXCpEAIXeEw"><i className="fab fa-twitter"></i></a>
            </section>
        </>

    )
}