import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color: #9758a6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758a6;
        background-color: #efefef;
        color: #9758a6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`

export const CategoryImg = styled.img``

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;

    p {
        color: #424242;
        font-weight: 700;
        font-size: 18px;
    }
`

export const ImgCategory = styled.img`
    width: 200px;
    border-radius: 15px;
    margin-bottom: 16px;
`

export const Button = styled.button`
    background: #9758a6;
    border: none;
    border-radius: 8px;
    height: 50px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    margin-top: 16px;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`
