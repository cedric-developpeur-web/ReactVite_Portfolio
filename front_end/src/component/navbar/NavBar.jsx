import React from 'react';

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
          <li><a href="#profile">Profile</a></li>
          <li><a href='#projets'>Mes Projets</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;