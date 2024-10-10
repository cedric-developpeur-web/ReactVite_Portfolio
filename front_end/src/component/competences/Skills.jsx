import React from 'react';
import comp from '../../traductor/fr.json';

const Skills = () => {
  const logoJs = '../../assets/logo_javascript.webp';
  const logoReact = '../../assets/React_Native_Logo.webp';
  const logoVite = '../../assets/logo_vitejs.webp';
  return (
    <section id='skill'>
      {/* <h2>Mes Compétences</h2> */}
      <h2>{comp.competence.description}</h2>
      <div className='posi_skills'>
        <img src={logoJs} alt="logo javascript" />
        <img src={logoReact} alt="logo nodejs" />
        <img src={logoVite} alt="logo react" />
      </div>
    </section>
  );
};

export default Skills;