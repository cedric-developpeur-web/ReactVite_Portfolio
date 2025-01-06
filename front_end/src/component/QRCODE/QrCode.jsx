import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import { QRCodeCanvas } from 'qrcode.react';
import './qrcode.scss';

const QrCode = () => {
  const { t } = useTranslation();

  return (
    <div className='posi_QR' >
      <QRCodeCanvas value={"https://cedriccocq-portfolio.vercel.app/"} size={100} />
      <p>{t('projet.titleQr')}</p>
    </div>
  );
};

export default QrCode;