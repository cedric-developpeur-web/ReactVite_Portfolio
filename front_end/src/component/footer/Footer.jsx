import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import donnee from '../../traductor/fr.json';

const Footer = () => {
  const { t } = useTranslation();
  const data = donnee.footer;


  // fonction de redirection de lien vers une autre page web grace à blank
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
        <div className='mail'>
          <i className="fa-solid fa-at"></i>
          <a href={`mailto:${data.mail}`} target='blank' rel='noopener noreferrer'>{data.mail}</a>
        </div>
      </div>
      <div className='dispo_button'>
        <i onClick={github} className="fa-brands fa-github"></i>
        <i onClick={linkedin} className="fa-brands fa-linkedin"></i>
        <a href={data.cv} target='blank' rel='noopener noreferrer'>
          <i className="fa-solid fa-file-pdf"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;