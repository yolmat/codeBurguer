import styled from 'styled-components'

import BackgroundImg from '../../assets/background.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url('${BackgroundImg}');
    background-repeat: repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginImg = styled.img`
    height: 50rem;
`

export const ContainerItens = styled.div`
    background: #373737;
    box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
    border-radius: 0 10px 10px 0;
    width: 40rem;
    height: 50rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
`

export const Logo = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20rem;
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1rem;
    color: #ffffff;
    text-align: center;
    margin: 1rem 0 2.5rem 0;
    /* margin: 5vmax 0 0.5vmax 0; */
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1rem;
    color: #ffffff;
    margin: 0.3rem;
`

export const Input = styled.input`
    border: ${props => (props.error ? '2px solid #cc1717;' : 'none')};
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    padding-left: 5px;
    width: 35rem;
    height: 2rem;
`

export const ErrorMessage = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 21px;

    margin-bottom: 1rem;

    color: #cc1717;
`

export const SingInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;

    a {
        cursor: pointer;
        text-decoration: underline;
        font-weight: 600;
    }

    a:hover {
        opacity: 0.8;
    }

    a:active {
        opacity: 0.5;
        color: #9758a6;
    }
`
