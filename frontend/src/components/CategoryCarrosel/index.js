import React, { useEffect } from 'react'

import category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg } from './style'

function CategoryCarrosel() {
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categories')
            console.log(response)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImg src={category} alt="Logo da Home" />
        </Container>
    )
}

export default CategoryCarrosel
