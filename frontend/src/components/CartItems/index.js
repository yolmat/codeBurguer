import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/convertCurrency'
import { Container, Header, Body, EmptyCart } from './style.js'

export function CartItems() {
    const { cartProducts } = useCart()
    return (
        <Container>
            <Header>
                <p></p>
                <p>Items</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} />
                        <p>{product.name}</p>
                        <p>{product.quantity}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <p>
                            {formatCurrency(product.quantity * product.price)}
                        </p>
                    </Body>
                ))
            ) : (
                <EmptyCart>Carrinho Vazio</EmptyCart>
            )}
        </Container>
    )
}
