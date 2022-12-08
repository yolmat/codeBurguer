import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../containers/home'
import Login from '../containers/Login'
import Product from '../containers/products'
import Register from '../containers/Register'
import PrivateRoute from './private-route'

function Routers() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact component={Home} path="/"></PrivateRoute>
                <Route component={Login} path="/login"></Route>
                <Route component={Register} path="/cadastro"></Route>
                <Route component={Product} path="/produtos"></Route>
            </Switch>
        </Router>
    )
}

export default Routers
