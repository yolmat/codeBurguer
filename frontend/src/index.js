import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserProvider } from './hooks/UserContext'
import Routers from './routes/routes'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <UserProvider>
            <Routers /> <GlobalStyles /> <ToastContainer />
        </UserProvider>
    </>
)
