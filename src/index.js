import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import './index.css';
import Header from './components/Header';
import Jokes from './components/Jokes';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter history={createBrowserHistory()}>
      <Routes>
        <Route path="/" element={<Header> <App/> </Header>} />
        <Route path="/jokes" element={<Header> <Jokes/> </Header>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);