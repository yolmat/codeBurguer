import styled from 'styled-components'

export const Container = styled.div`
    background: #e5e5e5;
`

export const ProductsImage = styled.img`
    width: 100%;
`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${props => (props.isActiveCategory ? '#9758A6' : '#9A9A9D')};
    border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
    font-size: 17px;
    line-height: 20px;
    padding-bottom: 5px;
`
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 40px;
    justify-items: center;
`
