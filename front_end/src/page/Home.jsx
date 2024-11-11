import React from 'react';
import Presentation from '../component/presentation/Presentation';
import Skills from '../component/competences/Skills';
import Projets from '../component/projets/Projets';
import Footer from '../component/footer/Footer';
import Header from '../component/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <br />
        <Skills />
        <br />
        <Projets />
      </main>
      <Footer />
    </>
  );
};

export default Home;