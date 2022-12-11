import React from 'react'

import cartLogo from '../../assets/CartLogo.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './style.js'

export function Cart() {
    return (
        <Container>
            <CartImg src={cartLogo} alt="Logo da Cart" />
            <CartItems />
        </Container>
    )
}
