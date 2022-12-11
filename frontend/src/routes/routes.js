import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Product, Register, Cart } from '../containers'
import PrivateRoute from './private-route'

function Routers() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact component={Home} path="/"></PrivateRoute>
                <Route component={Login} path="/login"></Route>
                <Route component={Register} path="/cadastro"></Route>
                <Route component={Product} path="/produtos"></Route>
                <Route component={Cart} path="/carrinho"></Route>
            </Switch>
        </Router>
    )
}

export default Routers
