import React from 'react';
import { Container, Content, Background} from './style';
import {FiLogIn} from 'react-icons/fi';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (

    <Container>
<Content> 
<img src={logoImg} alt="gobarber" />

<form >
<h1> Faça seu login </h1>

<Input name= "email" placeholder='E-mail' />
<Input  name="password" type= "password" placeholder='Senha'  />
<Button type="submit">Entrar</Button>
<a href="forgot"> Esqueci minha senha </a>
</form>

<a href=""> 
<FiLogIn/>
Criar conta</a>
</Content>

<Background/>
    </Container>

)

export default SignIn