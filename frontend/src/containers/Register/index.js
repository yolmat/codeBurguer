import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LogoImage from '../../assets/logo.svg'
import RegisterImage from '../../assets/registerimg.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
    Container,
    RegisterImg,
    ContainerItens,
    Logo,
    H1,
    Form,
    Label,
    Input,
    ErrorMessage,
    SingInLink
} from './style'

function Register() {
    const schema = Yup.object().shape({
        name: Yup.string('Esse campo e obrigatorio').required(
            'Esse campo e obrigatorio'
        ),
        email: Yup.string('Esse campo e obrigatorio')
            .email()
            .required('Esse campo e obrigatorio'),
        password: Yup.string('Esse campo e obrigatorio')
            .required('Esse campo e obrigatorio')
            .min(6),
        confirmPassword: Yup.string('Esse campo e obrigatorio')
            .required('Esse campo e obrigatorio')
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
        try {
            const { status } = await api.post(
                'users',
                {
                    name: clientData.name,
                    email: clientData.email,
                    password: clientData.password
                },
                {
                    validateStatus: () => true
                }
            )

            if (status === 201 || status === 200) {
                toast.success('Usuario criado com sucesso', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } else if (status === 409) {
                toast.error('Email já cadastrado! Faça login para continuar', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                })
            } else {
                throw new Error()
            }
        } catch (err) {
            toast.warn(
                'Tivemos uma falha no sistema! Tente novamente mais tarde',
                {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined
                }
            )
        }
    }

    return (
        <Container>
            <RegisterImg src={RegisterImage} alt="Login-Image" />

            <ContainerItens>
                <Logo src={LogoImage} alt="Logo" />
                <H1>Cadastre-se</H1>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        {...register('name')}
                        error={errors.name?.message}
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

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

                    <Label>Confirmar Senha</Label>
                    <Input
                        type="password"
                        {...register('confirmPassword')}
                        error={errors.confirmPassword?.message}
                    />
                    <ErrorMessage>
                        {errors.confirmPassword?.message}
                    </ErrorMessage>

                    <Button type="submit" style={{ margin: '1rem 0 2rem' }}>
                        SingUp
                    </Button>
                </Form>
                <SingInLink>
                    Já possui conta ?{' '}
                    <Link style={{ color: 'white' }} to="/login">
                        SingIn
                    </Link>
                </SingInLink>
            </ContainerItens>
        </Container>
    )
}

export default Register
