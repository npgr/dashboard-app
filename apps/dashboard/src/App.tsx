// rafce
// npm i --legacy-peer-deps ??
import { useEffect } from 'react';
// import { GlobalStyles } from 'twin.macro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Settings } from './components/Settings';
import { SideBar } from './components/SideBar';

import './App.css';

export const App = () => {
  return (
    <>
      {/* <GlobalStyles /> */}
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <Settings />
          <SideBar />
        </div>
      </BrowserRouter>
    </>
  );
};
