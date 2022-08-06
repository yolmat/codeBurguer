import React from 'react'

import LoginImage from '../../assets/loginimg.svg'
import LogoImage from '../../assets/logo.svg'
import {
  Container,
  LoginImg,
  ContainerItens,
  Logo,
  H1,
  Label,
  Input,
  Button,
  SingInLink
} from './style'

function Login() {
  return (
    <Container>
      <LoginImg src={LoginImage} alt="Login-Image" />

      <ContainerItens>
        <Logo src={LogoImage} alt="Logo" />
        <H1>Login</H1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>SingIn</Button>
        <SingInLink>
          Não possui conta ? <a>SingUp</a>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
