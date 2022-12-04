import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import category from '../../assets/category.png'
import api from '../../services/api'
import {
    Container,
    CategoryImg,
    ContainerItens,
    Button,
    ImgCategory
} from './style'

function CategoryCarrosel() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }

        loadCategories()
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
            <CategoryImg src={category} alt="Logo da Home" />

            <Carousel
                itemsToShow={5}
                style={{ width: '95%' }}
                breakPoints={breackPoints}
            >
                {categories &&
                    categories.map(category => (
                        <ContainerItens key={category.id}>
                            <ImgCategory
                                src={category.url}
                                alt="Foto da categoria"
                            />
                            <Button>{category.name}</Button>
                        </ContainerItens>
                    ))}
            </Carousel>
        </Container>
    )
}

export default CategoryCarrosel
