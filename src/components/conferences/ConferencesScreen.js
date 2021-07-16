import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../helpers/i18n';
import './styles/conferencesScreen.css';


export const ConferencesScreen = () => {

    const changeLanguage = (ln) => {
        return () => {
            i18n.changeLanguage(ln);
        }
    }

    const {t} = useTranslation();
    return (
        <>
            <section id="header">
                <div className="header container2">
                    <div className="nav-bar">
                        <div className="brand">
                            <a href="#hero"><h1>UAL</h1></a>
                        </div>
                        <div className="nav-list">
                        <input type="checkbox" id="check"/>
                        <label htmlFor="check">
                            <i className="fas fa-bars" id="btn"></i>
                            <i className="fas fa-times" id="cancel"></i>
                         </label>
                            
                            <ul>
                                <li><a href="#hero">{t("navbarHome")}</a></li>
                                <li><a href="#services">{t("navbarAbout")}</a> </li>
                                <li><a href="#contact">{t("navbarContact")}</a></li>
                                <li><button className="conf"><Link to="/conferencias_ual/conferencias">{t("navbarConferences")}</Link></button></li>
                                <li><button className="conf"><Link to="/auth/login">{t("navbarAdmin")}</Link></button></li>
                                <li><button id="flag-PT" onClick={changeLanguage('pt')}>pt</button></li>
                                <li><button id="flag-UK" onClick={changeLanguage('en')}>en</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="hero"> 
                <div className="hero container2">
                    <div>
                        <h1>{t("thumbnail")}</h1>
                        <p>Universidade Autónoma de Lisboa</p>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="container1">
                    <h1 className="section-title">{t("about")} <span> {t("us")}</span></h1>
                    <div className="row services">
                        <div className="col-md-3 text-center">
                            <div className="icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3>{t("whyUs")}</h3>
                            <p>{t("whyUsP")}</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="icon">
                                <i className="fas fa-user-friends" ></i>
                            </div>
                            <h3>{t("whoAreWe")}</h3>
                            <p>{t("whoAreWeP")}</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="icon">
                                <i className="fas fa-desktop"></i>
                            </div>
                            <h3>{t("whatWeDo")}</h3>
                            <p>{t("whatWeDoP")}</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="icon">
                                <i className="fas fa-university"></i>
                            </div>
                            <h3>UAL</h3>
                            <p>{t("ualP")}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="contact container2">
                    <div>
                        <h1 className="section-title">{t("informationsOf")} <span>{t("informationsContact")}</span></h1>
                    </div>
                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="contact-info">
                                <h1>{t("phone")}</h1>
                                <h2>(+351) 213 177 600</h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info">
                                <h1>{t("informationsEmail")}</h1>
                                <h2>geral@autonoma.pt</h2>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="contact-info">
                                <h1>{t("address")}</h1>
                                <h2>Rua de Santa Marta 56 1169-023 Lisboa</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer">
                <div className="footer container2">
                    <div className="brand">
                        <h1><span>{t("footerC")}</span>{t("foorterOnference")} <span>R</span>{t("footerEgisto")} <span>{t("footerS")}</span>{t("footeYstem")}</h1>
                    </div>
                    <h2>{t("footerSolution")}</h2>
                    <p className="p">  copyright &copy; 2021 Universidade Autónoma de Lisboa</p>
                </div>
            </section>
        </>

    )
}