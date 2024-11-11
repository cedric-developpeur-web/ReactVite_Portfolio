import React from 'react';
import Presentation from '../component/presentation/Presentation';
import Skills from '../component/competences/Skills';
import Projets from '../component/projets/Projets';

const Home = () => {
  return (
    <>
      <main>
        <Presentation />
        <br />
        <Skills />
        <br />
        <Projets />
      </main>
    </>
  );
};

export default Home;