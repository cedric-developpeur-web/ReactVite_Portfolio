import React from 'react';
import tradFr from '../../../public/traductor/fr.json';

const NavBar = () => {
  const drapeauFrance = '../../assets/france.png';
  const drapeauAnglais = '../../assets/royaume-uni.png';

  return (
    <header>
      <nav>
        <div className='posi_drapeau'>
          <img className='drap_fr' src={drapeauFrance} alt="icone du drapeau français" />
          <img src={drapeauAnglais} alt="icone du drapeau anglais" />
        </div>
        <ul>
          <li><a href="#profile">{tradFr.navbar.title1}</a></li>
          <li><a href='#projets'>{tradFr.navbar.title2}</a></li>
          <li><a href='#contact'>{tradFr.navbar.title3}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;