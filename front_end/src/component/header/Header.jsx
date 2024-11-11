import React from 'react';
import './header.scss';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';

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
          <li><a href="#profil">{t('navbar.title1')}</a></li>
          <li><a href='#projets'>{t('navbar.title2')}</a></li>
          <li><a href='#contact'>{t('navbar.title3')}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;