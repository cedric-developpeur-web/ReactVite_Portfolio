import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Works from './page/works';
import PageError from './page/PageError';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works/:id' element={<Works />} />
        <Route path='*' element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;