import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const cartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const putProductsInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []

        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }

        await localStorage.setItem(
            'codeburguer:cartInfo',
            JSON.stringify(newCartProducts)
        )
    }

    useEffect(() => {
        const loadCartData = async () => {
            const clientCartData = await localStorage.getItem(
                'codeburguer:cartInfo'
            )

            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }

        loadCartData()
    }, [])

    return (
        <cartContext.Provider value={{ putProductsInCart, cartProducts }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(cartContext)

    if (!context) {
        throw new Error('userUser must be used with UserContext')
    }
    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}
