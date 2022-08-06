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
  height: 45vmax;
`

export const ContainerItens = styled.div`
  background: #373737;
  box-shadow: 0px 4px 15px rgba(74, 144, 226, 0.24);
  border-radius: 0 10px 10px 0;
  height: 45vmax;
  padding: 0 5vmax;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
`

export const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vmin;
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 1.5vmax;
  line-height: 1rem;
  color: #ffffff;
  text-align: center;
  margin: 5vmax 0 0.5vmax 0;
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1vmax;
  line-height: 1rem;
  color: #ffffff;
  margin-bottom: 0.3vmax;
`

export const Input = styled.input`
  border: none;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  padding-left: 5px;
  height: 2vmax;
  margin-bottom: 1vmax;
`

export const Button = styled.button`
  width: 10vmax;
  padding: 0.5rem 0;
  border: none;
  background: #9758a6;
  border-radius: 20px;
  margin: 2vmax 0 5vmax;
  color: #ffffff;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
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
