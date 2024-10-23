import React from 'react';
import NavBar from '../component/navbar/NavBar';
import Structure from '../component/work/Structure';
import Footer from '../component/footer/Footer';


const works = () => {
  return (
    <>
      <NavBar />
      <main>
        <Structure />
      </main>
      <Footer />
    </>
  );
};

export default works;