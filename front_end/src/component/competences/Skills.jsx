import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import './skill.scss';

const Skills = () => {
  const { t } = useTranslation();
  ;
  return (
    <section id='skill'>
      <h2>{t('competence.description')}</h2>
      <div className='posi_skills'>
        <img src='/assets/logo_javascript.webp' alt="logo javascript" />
        <img src='/assets/React_Native_Logo.webp' alt="logo react native" />
        <img src='/assets/logo_vitejs.webp' alt="logo react vite" />
      </div>
    </section>
  );
};

export default Skills;