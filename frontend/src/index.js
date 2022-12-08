import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routers from './routes/routes'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
        <AppProvider>
            <Routers /> <GlobalStyles /> <ToastContainer />
        </AppProvider>
    </>
)
