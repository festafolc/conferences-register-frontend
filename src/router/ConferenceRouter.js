import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConferencesScreen } from '../components/conferences/ConferencesScreen'
import { ConferencesListScreen } from '../components/conferences/ConferencesListScreen'
import { RegistrationScreen } from '../components/conferences/RegistrationScreen'



export const ConferenceRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/conferencias_ual" component={ConferencesScreen} />
                <Route exact path="/conferencias_ual/conferencias" component={ConferencesListScreen} />
                <Route path= '/conferencias_ual/inscricao' component={RegistrationScreen} />
                <Redirect to="/conferencias_ual" />
            </Switch>
        </>
    )
}