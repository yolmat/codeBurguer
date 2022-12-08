import React, { useEffect, useState } from 'react'

import productsLogo from '../../assets/productLogo.svg'
import api from '../../services/api.js'
import {
    Container,
    ProductsImage,
    CategoryButton,
    CategoryMenu
} from './style.js'

function Product() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }

        loadCategories()
    }, [])
    return (
        <Container>
            <ProductsImage src={productsLogo} alt="Logo da Home" />
            <CategoryMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton
                            key={category.id}
                            type="button"
                            isActiveCategory={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id)
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
            </CategoryMenu>
        </Container>
    )
}

export default Product
