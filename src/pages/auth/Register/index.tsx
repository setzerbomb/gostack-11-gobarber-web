import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../../assets/img/logo.svg';

import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';

import { Container, Content, Background } from './styles';

const Login: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Registre-se</h1>

          <Input name="name" icon={FiUser} type="text" placeholder="Usuário" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft />
          Login
        </Link>
      </Content>
    </Container>
  );
};

export default Login;
