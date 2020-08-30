import React from 'react';

import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logo from '../../../assets/img/logo.svg';

import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';

import { Container, Content, Background } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />

        <form action="">
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <Link to="/forgot">Esqueci minha senha</Link>
        </form>

        <Link to="/register">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>

      <Background />
    </Container>
  );
};

export default Login;
