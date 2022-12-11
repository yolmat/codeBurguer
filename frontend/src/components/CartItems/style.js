import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 10px;
    width: max-content;
`
export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;

    p {
        font-size: 16px;
        color: #b5b5b5;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    width: max-content;

    img {
        width: 200px;
        border-radius: 10px;
    }

    p {
        font-size: 16px;
        color: #000000;
    }

    .quantityContainer {
        display: flex;
        gap: 20px;
        align-items: baseline;

        button {
            height: 30px;
            background-color: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`
