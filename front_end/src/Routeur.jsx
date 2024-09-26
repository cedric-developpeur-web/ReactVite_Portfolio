import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
const Routeur = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;