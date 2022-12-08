import React from 'react'

import PropTypes from 'prop-types'

import Button from '../Button'
import {
    Container,
    Image,
    Productname,
    ProductPrice,
    ProductContainer
} from './style'

function CardProducts({ product }) {
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

export default CardProducts

CardProducts.propTypes = {
    product: PropTypes.object
}
