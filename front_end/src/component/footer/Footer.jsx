import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import donnee from '../../traductor/fr.json';

const Footer = () => {
  const { t } = useTranslation();
  const data = donnee.footer;

  const [numberHide, setNumberHide] = useState("");
  const [revealNumber, setRevealNumber] = useState(false);

  // fonction qui affiche les 4 premier chiffre et masque le reste
  const hideNumber = (numb) => {
    return numb.slice(0, 3) + numb.slice(4).replace(/\d/g, "*");
  };

  // utiliser useEffect pour définir le numéro chiffré après le chargement
  useEffect(() => {
    const number = hideNumber(data.number);
    setNumberHide(number);
  }, [data.number]);

  // fonctions qui vient réveler le numéro complet au survol de l'icone (sur ordinateur)
  const numberRevealEnter = () => {
    setRevealNumber(true);
  };
  const numberRevealLeave = () => {
    setRevealNumber(false);
  };
  // fonctions qui vient réveler le numéro sur une interface tactile au click de l'icone (mobile et tablette)
  const revealTouchStart = () => {
    setRevealNumber(true);
  };
  const revealTouchEnd = () => {
    setRevealNumber(false);
  };
  // fonction de redirection de lien vers une autre page web grace à blank
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
          <p>{revealNumber ? data.number : numberHide}</p>
          <i className="fa-regular fa-eye"
            //evenement onMouseEnter et onMouseLeave nous permet de faire un effet de hover sur l'icone eyes pour affichée le numéro (ordinateur)
            onMouseEnter={numberRevealEnter} onMouseLeave={numberRevealLeave}
            //evenement onMouseEnter et onMouseLeave nous permet de faire un effet au touché sur l'icone eyes pour affichée le numéro (mobile tablette)
            onTouchStart={revealTouchStart} onTouchEnd={revealTouchEnd}
          ></i>
        </div>
        <div className='mail' onClick={mailto}>
          <i className="fa-solid fa-at"></i>
          <a>{data.mail}</a>
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