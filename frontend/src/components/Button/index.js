import React from 'react'

import PropTypes from 'prop-types'

import { Btn } from './style'

function Button({ children, ...rest }) {
  return <Btn {...rest}>{children}</Btn>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
