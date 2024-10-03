import React from 'react';

const Skills = () => {
  const logoJs = '../../assets/logo_javascript.webp';
  const logoReact = '../../assets/React_Native_Logo.webp';
  const logoVite = '../../assets/logo_vitejs.webp';
  return (
    <section id='skill'>
      <h2>Mes Compétences</h2>
      <div className='posi_skills'>
        <img src={logoJs} alt="logo javascript" />
        <img src={logoReact} alt="logo nodejs" />
        <img src={logoVite} alt="logo react" />
      </div>
    </section>
  );
};

export default Skills;