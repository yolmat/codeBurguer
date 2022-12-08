import React, { useEffect, useState } from 'react'

import productsLogo from '../../assets/productLogo.svg'
import CardProducts from '../../components/CardProducts'
import api from '../../services/api.js'
import formatCurrency from '../../utils/convertCurrency'
import {
    Container,
    ProductsImage,
    CategoryButton,
    CategoryMenu,
    ProductsContainer
} from './style.js'

function Product() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data } = await api.get('products')

            const newProducts = data.map(product => {
                return {
                    ...product,
                    formatedPrice: formatCurrency(product.price)
                }
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])
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
            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map(product => (
                        <CardProducts
                            key={product.id}
                            product={product}
                        ></CardProducts>
                    ))}
            </ProductsContainer>
        </Container>
    )
}

export default Product
