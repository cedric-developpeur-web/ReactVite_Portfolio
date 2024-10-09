import React from 'react';
import pres from '../../../public/traductor/fr.json';

const Presentation = () => {
  const profile = '../../assets/Profile.webp';
  return (
    <div id='profile' className='prestation'>
      <img src={profile} alt="photo de profile du développer cedric" />
      <div className='descript'>
        <p>{pres.presentation.description}</p>
      </div>
    </div>
  );
};

export default Presentation;