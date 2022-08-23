import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Login /> <GlobalStyles /> <ToastContainer />
    </UserProvider>
  </>
)

root()
