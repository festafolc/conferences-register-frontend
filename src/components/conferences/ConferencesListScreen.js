import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { ConferencesList } from "./ConferencesList";


export const ConferencesListScreen = () => {

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
            <ConferencesList />
        </>
    )
}