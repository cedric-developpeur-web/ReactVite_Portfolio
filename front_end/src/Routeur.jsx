import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Works from './page/works';
const Routeur = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works/:id' element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;