import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import { AuthProvider } from './context/AuthContext';
// import toastContext from './context/ToastContext';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
