import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import offer from '../../assets/offers.png'
import api from '../../services/api'
import {
    Container,
    CategoryImg,
    ContainerItens,
    Button,
    ImgCategory
} from './style'

function OffersCarrosel() {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer)

            setOffers(onlyOffers)
        }

        loadOffers()
    }, [])

    const breackPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImg src={offer} alt="Logo da oferta" />

            <Carousel
                itemsToShow={5}
                style={{ width: '95%' }}
                breakPoints={breackPoints}
            >
                {offers &&
                    offers.map(products => (
                        <ContainerItens key={products.id}>
                            <ImgCategory
                                src={products.url}
                                alt="Foto da produto"
                            />
                            <p>{products.name}</p>
                            <p>{products.price}</p>
                            <Button>Peça Agora</Button>
                        </ContainerItens>
                    ))}
            </Carousel>
        </Container>
    )
}

export default OffersCarrosel
