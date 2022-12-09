import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../'
import {
    Container,
    Image,
    Productname,
    ProductPrice,
    ProductContainer
} from './style'

export function CardProducts({ product }) {
    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <ProductContainer>
                <Productname>{product.name}</Productname>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button type="button">Adicionar</Button>
            </ProductContainer>
        </Container>
    )
}

CardProducts.propTypes = {
    product: PropTypes.object
}
