import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import donnee from '../../traductor/fr.json';

const Footer = () => {
  const { t } = useTranslation();
  const data = donnee.footer;

  const mailto = () => {
    window.open('mailto:{data.mail}', '_blank');
  }
  const github = () => {
    window.open(data.webgithub, '_blank');
  }
  const linkedin = () => {
    window.open(data.weblinkedin, '_blank');
  }
  return (
    <footer id='contact'>
      <div className='dispo_coordonnee'>
        <h3>{t('footer.title')}</h3>
        <div className='phone'>
          <i className="fa-solid fa-phone"></i>
          <p>{data.number}</p>
        </div>
        <div className='mail' onClick={mailto}>
          <i className="fa-solid fa-at"></i>
          <p>{data.mail}</p>
        </div>
      </div>
      <div className='dispo_button'>
        <button onClick={github}><i className="fa-brands fa-github"></i>{t('footer.github')}<i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
        <button onClick={linkedin}><i className="fa-brands fa-linkedin"></i>{t('footer.linkedin')}<i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
        <button><i className="fa-solid fa-file-pdf"></i>{t('footer.cv')}<i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></button>
      </div>
    </footer>
  );
};

export default Footer;