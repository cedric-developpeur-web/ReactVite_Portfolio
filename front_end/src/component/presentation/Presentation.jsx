import React from 'react';

const Presentation = () => {
  const profile = '../../assets/Profile.webp';
  return (
    <div id='profile' className='prestation'>
      <img src={profile} alt="photo de profile du développer cedric" />
      <div className='descript'>
        <p>Je m’appelle Cédric, âgé de 27 ans,
          j’ai effectué un parcours de formation professionnelle d’une durée de 1 an dans le domaine du développement web
          pour le poste de développeur front end.
        </p>
      </div>
    </div>
  );
};

export default Presentation;