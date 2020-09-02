import React, { useCallback, useRef, useContext } from 'react';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../../assets/img/logo.svg';

import api from '../../../services/api';

import { AuthContext } from '../../../context/AuthContext';

// import { useToast } from '../../../context/ToastContext';
import getValidationErrors from '../../../utils/getValidationsErrors';

import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';

import { Container, Content, Background } from './styles';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('O campo E-mail é de preenchimento obrigatório.')
            .email('O endereço informado não é um endereço de e-mail válido.'),
          password: Yup.string().required('Senha obrigatória.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn(data);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, signIn]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

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
