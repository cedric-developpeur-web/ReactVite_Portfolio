import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';

const Presentation = () => {
  const { t } = useTranslation();
  return (
    <div id='profile' className='prestation'>
      <img src='/assets/Profile.webp' alt="photo de profile du développer cedric" />
      <div className='descript'>
        <h1>{t('presentation.description')}</h1>
      </div>
    </div>
  );
};

export default Presentation;