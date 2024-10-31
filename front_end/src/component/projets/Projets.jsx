import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import { useNavigate } from 'react-router-dom';
import data from '../../traductor/fr.json';
import { QRCodeCanvas } from 'qrcode.react';

const Projets = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const redi = (id) => {
    navigate(`/works/${id}`);
  };

  return (
    <section id='projets' className='project'>
      <h2>{t('projet.description')}</h2>
      <div className='posi_projects'>
        {data.projets.map((projet) => (
          <div key={projet.id}>
            <img src={projet.miniPicture[0].src} alt={projet.miniPicture[0].alt} />
            <div className='posi_button'>
              <button onClick={() => redi(projet.id)}>{projet.title}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
            </div>
          </div>
        ))}
      </div>
      <div className='posi_QR' >
        <QRCodeCanvas value={"https://cedriccocq-portfolio.vercel.app/"} size={100} />
        <p>{t('projet.titleQr')}</p>
      </div>
    </section>
  );
};

export default Projets;