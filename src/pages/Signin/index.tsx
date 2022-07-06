import React, { useCallback, useRef , useContext} from 'react';
import { Container, Content, Background} from './style';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup'
import logoImg from '../../assets/logo.svg';
import { GetValidationErrors } from '../../utils/getValidationerrors';
import { FormHandles } from '@unform/core';
import { AuthContext } from '../../context/AuthContext';

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const {signIn} = useContext(AuthContext)

    const handleLogin = useCallback(async (data: object) => {
        try {

            formRef.current?.setErrors({})

            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha Obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            signIn()

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                console.log(err.inner)
                const errors = GetValidationErrors(err);
                console.log(errors)
                
                formRef.current?.setErrors(errors);
                return;
            }
        }
    }, [signIn])

    return (

    <Container>
<Content> 
<img src={logoImg} alt="gobarber" />

<Form ref={formRef} onSubmit={handleLogin} >
<h1> Faça seu login </h1>

<Input name= "email" icon={FiMail} placeholder='E-mail' />
<Input  name="password" icon={FiLock} type= "password" placeholder='Senha'  />

<Button type="submit">Entrar</Button>
<a href="forgot"> Esqueci minha senha </a>
</ Form>

<a href=""> 
<FiLogIn/>
Criar conta</a>
</Content>

<Background/>
    </Container>
)
}

export default SignIn