import React from 'react'
import { useForm } from 'react-hook-form'

import LoginImage from '../../assets/loginimg.svg'
import LogoImage from '../../assets/logo.svg'
import {
  Container,
  LoginImg,
  ContainerItens,
  Logo,
  H1,
  Form,
  Label,
  Input,
  Button,
  SingInLink
} from './style'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImg src={LoginImage} alt="Login-Image" />

      <ContainerItens>
        <Logo src={LogoImage} alt="Logo" />
        <H1>Login</H1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" {...register('Email')} />

          <Label>Senha</Label>
          <Input type="password" {...register('Password')} />

          <Button type="submit">SingIn</Button>
        </Form>
        <SingInLink>
          Não possui conta ? <a>SingUp</a>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
