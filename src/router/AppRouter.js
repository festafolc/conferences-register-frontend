import React, { useEffect } from "react";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CalendarScreen} from "../components/calendar/CalendarScreen";
import {startChecking} from "../actions/auth";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";
import {AuthRouter} from "./AuthRouter";
import {ConferenceRouter} from "./ConferenceRouter";


export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);

    useEffect(() => {
        
        dispatch(startChecking());

    }, [dispatch]);


    if (checking) {
        return (<h5>Espere...</h5>)
    }

  return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={!!uid} path="/auth" component={AuthRouter}/>
                    <PublicRoute isAuthenticated={!!uid} path="/conferencias_ual" component={ConferenceRouter}/>
                    <PrivateRoute isAuthenticated={!!uid} path="/conferencias_autonoma" component={CalendarScreen}/>
                    <Redirect to="/conferencias_ual" />
                </Switch>
            </div>
        </Router>
    );
};
