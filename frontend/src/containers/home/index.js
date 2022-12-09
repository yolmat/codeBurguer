import React from 'react'

import homeLogo from '../../assets/HomeLogo.svg'
import { CategoryCarrosel, OffersCarrosel } from '../../components'
import { Container, HomeImg } from './style.js'

export function Home() {
    return (
        <Container>
            <HomeImg src={homeLogo} alt="Logo da Home" />
            <CategoryCarrosel />
            <OffersCarrosel />
        </Container>
    )
}
