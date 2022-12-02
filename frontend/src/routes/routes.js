import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function Routers() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login"></Route>
                <Route component={Register} path="/cadastro"></Route>
            </Switch>
        </Router>
    )
}

export default Routers
