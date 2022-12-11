import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/convertCurrency'
import { Container, Header, HeaderBody } from './style.js'

export function CartItems() {
    const { cartProducts } = useCart()
    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Items</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts &&
                cartProducts.map(product => (
                    <HeaderBody key={product.id}>
                        <img src={product.url} />
                        <p>{product.name}</p>
                        <p>{product.quantity}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <p>
                            {formatCurrency(product.quantity * product.price)}
                        </p>
                    </HeaderBody>
                ))}
        </Container>
    )
}
