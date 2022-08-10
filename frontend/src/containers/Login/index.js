import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImage from '../../assets/loginimg.svg'
import LogoImage from '../../assets/logo.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  LoginImg,
  ContainerItens,
  Logo,
  H1,
  Form,
  Label,
  Input,
  ErrorMessage,
  SingInLink
} from './style'

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email valido')
      .required('Esse campo e obrigatorio'),
    password: Yup.string()
      .required('Esse campo e obrigatorio')
      .min(6, 'Esse campo deve ter no minimo 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
      <LoginImg src={LoginImage} alt="Login-Image" />

      <ContainerItens>
        <Logo src={LogoImage} alt="Logo" />
        <H1>Login</H1>

        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ margin: '2vmax 0 5vmax' }}>
            SingIn
          </Button>
        </Form>
        <SingInLink>
          Não possui conta ? <a>SingUp</a>
        </SingInLink>
      </ContainerItens>
    </Container>
  )
}

export default Login
