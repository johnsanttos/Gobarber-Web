import React, {useCallback} from 'react';
import { Container, Content, Background } from './style';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';
import * as Yup from 'yup'


const SignUp: React.FC = () => {

const handleSubmit = useCallback (async (data: object) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No minimo 6 dígitos')
            })

            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
                console.log(err)
        }
    },[])
    return (
        <Container>
            <Background />

            <Content>
                <img src={logoImg} alt="gobarber" />

                <Form onSubmit={handleSubmit}>
                    <h1> Faça seu Cadastro </h1>

                    <Input name="name" icon={FiUser} placeholder='Nome' />
                    <Input name="email" icon={FiMail} placeholder='E-mail' />
                    <Input name="password" icon={FiLock} type="password" placeholder='Senha' />

                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="">
                    <FiArrowLeft />
                    Voltar para login </a>
            </Content>


        </Container>


    )

}

export default SignUp