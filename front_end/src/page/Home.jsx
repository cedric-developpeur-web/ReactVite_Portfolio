import React from 'react';
import Presentation from '../component/presentation/Presentation';
import Skills from '../component/competences/Skills';
import QrCode from '../component/QRCODE/QrCode';


const Home = () => {
  return (
    <>
      <main>
        <Presentation />
        <br />
        <Skills />
        <br />
        <QrCode />
      </main>
    </>
  );
};

export default Home;