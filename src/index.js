import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import SelectDate from './pages/selectDate'
import Result from './pages/result'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SelectDate/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
  </BrowserRouter>
);
