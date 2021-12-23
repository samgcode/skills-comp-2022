import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css';
import Home from './pages/Home'

import Navbar from './components/navbar/Navbar';
import TailwindSizingDisplay from './components/TailwindSizingDisplay';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <TailwindSizingDisplay />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
