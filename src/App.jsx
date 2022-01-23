import Main from './components/index';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
