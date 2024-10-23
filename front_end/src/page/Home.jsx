import React from 'react';
import NavBar from '../component/navbar/NavBar';
import Presentation from '../component/presentation/Presentation';
import Skills from '../component/competences/Skills';
import Projets from '../component/projets/Projets';
import Footer from '../component/footer/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
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