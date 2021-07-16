import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import moment from "moment";
import { Link } from "react-router-dom";
import { eventStartLoadingWithouToken } from "../../actions/events";
import { participantEventSetActive } from "../../actions/participant";
import "./styles/conferencesList.css"


export const ConferencesList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(eventStartLoadingWithouToken());
        
    }, [dispatch]);

    const {events} = useSelector(state => state.participant);

    const onSelectConference = (e) => {
        const selectedEvent = events.find(({id}) => id == e.currentTarget.dataset.conference);
        dispatch(participantEventSetActive(selectedEvent))
    }

    const {t} = useTranslation();

    return (
        <div className="container-list-conference container-html">
            <br />
                {
                    events.map(conference => (
                        <div className="card-conference" key={conference.id}>
                            <div className="card-text-style">
                                <div className="card-content">
                                    <div className="conference-details">
                                        <div className="icon-text">
                                            <span className="icon"><i className="far fa-calendar-alt"></i> {t("cfStartDate")} </span>
                                            <br/>
                                            <span className="text">{moment(conference.start).format('L')}</span>
                                            <br/>
                                            <span className="text">{moment(conference.start).format('LT')}</span>                                      
                                        </div>
                                        <div className="icon-text">
                                            <span className="icon"><i className="far fa-calendar-alt"></i> {t("cfEndDate")} </span>
                                            <br/>
                                            <span className="text">{moment(conference.end).format('L')}</span>
                                            <br/>
                                            <span className="text">{moment(conference.end).format('LT')}</span>   
                                        </div>
                                    </div>   
                                    <span className="text">{t("cfClass")} {conference.sala}</span> 
                                    <h2 className="conference-title">{conference.tema}</h2>
                                    <p className="conference-descricao">{conference.descricao}</p>
                                    <div className="blog-cta" data-conference={conference.id} onClick={onSelectConference}>
                                        <Link className="button" to={`/conferencias_ual/inscricao/${conference.id}`}>{t("cfSignUp")}</Link>                                  
                                    </div>                               
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}