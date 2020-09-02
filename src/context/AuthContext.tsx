import React, { createContext, useCallback } from 'react';

import api from '../services/api';

interface AuthContextData {
  name: string;
  signIn(data: SignInCredentials): Promise<void>;
}

interface SignInCredentials {
  email: string;
  password: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const {
      data: { user, token },
    } = await api.post('/sessions', {
      email,
      password,
    });

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }, []);

  return (
    <AuthContext.Provider value={{ name: '', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
