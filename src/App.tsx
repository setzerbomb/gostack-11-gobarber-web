import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import ToastContainer from './components/common/ToastContainer';
import AppProvider from './hooks';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
