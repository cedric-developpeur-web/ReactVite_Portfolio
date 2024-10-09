import React from 'react';
import proj from '../../../public/traductor/fr.json';

const Projets = () => {

  const sophieBluel = '../../assets/javascript_sophieBluel.webp';
  const argentBank = '../../assets/ReactVite_argentBank.webp';
  const kasa = '../../assets/ReactCra_kasa.webp';

  return (
    <section id='projets' className='project'>
      <h2>{proj.projets.description}</h2>
      <div className='posi_projects'>
        <div>
          <img src={sophieBluel} alt="image du projet sophie bluel javascript" />
          <div className='posi_button'>
            <button>{proj.projets.title1}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={kasa} alt="image du projet kasa react avec cra" />
          <div className='posi_button'>
            <button>{proj.projets.title2}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={argentBank} alt="image du projet argent bank react avec vite" />
          <div className='posi_button'>
            <button>{proj.projets.title3}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;