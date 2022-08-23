import React, { createContext, useContext } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const user = { name: 'Mateus', age: 18 }
  const outroUser = { name: 'Maria', age: 18 }

  return (
    <UserContext.Provider value={{ user, outroUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('userUser must be used with UserContext')
  }
  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
