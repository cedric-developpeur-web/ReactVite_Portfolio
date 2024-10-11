import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import { useNavigate } from 'react-router-dom';
import sophieBluel from '../../assets/javascript_sophieBluel.webp';
import argentBank from '../../assets/ReactVite_argentBank.webp';
import kasa from '../../assets/ReactCra_kasa.webp';


const Projets = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const redi = (id) => {
    navigate(`/works/${id}`);
  };

  return (
    <section id='projets' className='project'>
      <h2>{t('projets.description')}</h2>
      <div className='posi_projects'>
        <div>
          <img src={sophieBluel} alt="image du projet sophie bluel javascript" />
          <div className='posi_button'>
            <button onClick={() => redi(t('projets.item1.id'))}>{t('projets.item1.title')}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={kasa} alt="image du projet kasa react avec cra" />
          <div className='posi_button'>
            <button onClick={() => redi(t('projets.item2.id'))}>{t('projets.item2.title')}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={argentBank} alt="image du projet argent bank react avec vite" />
          <div className='posi_button'>
            <button onClick={() => redi(t('projets.item3.id'))}>{t('projets.item3.title')}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;