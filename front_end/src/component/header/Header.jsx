import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import { NavLink } from 'react-router-dom';
// permet un redirection sur une section du site plus fluide avec un scroll dynamique
import { Link as ScrollLink } from 'react-scroll';
import './header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav>
        <div className='posi_drapeau'>
          <img onClick={() => changeLanguage('fr')} className='drap_fr' src='/assets/france.webp' alt="icone du drapeau français" />
          <img onClick={() => changeLanguage('en')} src='/assets/royaume-uni.webp' alt="icone du drapeau anglais" />
        </div>
        <ul>
          {/* smooth doit toujours etre a tue car s'il est a false le scroll dynamique ne s'applique pas */}
          <li><ScrollLink to="profil" smooth={true} duration={500}>{t('navbar.title1')}</ScrollLink></li>
          {/* navLink est utilisé pour les redirection vers une autre page contraiment a ScrollLink qui cible une section ou element sur une page */}
          <li><NavLink to="/works">{t('navbar.title2')}</NavLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={900}>{t('navbar.title3')}</ScrollLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;