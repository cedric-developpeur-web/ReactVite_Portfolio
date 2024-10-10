import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import logoJs from '../../assets/logo_javascript.webp';
import logoReact from '../../assets/React_Native_Logo.webp';
import logoVite from '../../assets/logo_vitejs.webp';;

const Skills = () => {
  const { t } = useTranslation();
  ;
  return (
    <section id='skill'>
      <h2>{t('competence.description')}</h2>
      <div className='posi_skills'>
        <img src={logoJs} alt="logo javascript" />
        <img src={logoReact} alt="logo nodejs" />
        <img src={logoVite} alt="logo react" />
      </div>
    </section>
  );
};

export default Skills;