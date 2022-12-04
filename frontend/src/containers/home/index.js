import React from 'react'

import homeLogo from '../../assets/HomeLogo.svg'
import CategoryCarrosel from '../../components/CategoryCarrosel'
import { Container, HomeImg } from './style.js'

function Home() {
    return (
        <Container>
            <HomeImg src={homeLogo} alt="Logo da Home" />
            <CategoryCarrosel />
        </Container>
    )
}

export default Home
