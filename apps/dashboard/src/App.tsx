// rafce
// npm i --legacy-peer-deps ??
import { useEffect } from 'react';
// import { GlobalStyles } from 'twin.macro';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppRoutes } from './components/AppRoutes';

import './App.css';

export const App = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  );
};
