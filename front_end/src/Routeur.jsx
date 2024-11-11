import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Works from './page/works';
import PageError from './page/PageError';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works/:id' element={<Works />} />
        <Route path='*' element={<PageError />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routeur;