import React from 'react';

const Projets = () => {

  const sophieBluel = '../../assets/javascript_sophieBluel.webp';
  const argentBank = '../../assets/ReactVite_argentBank.webp';
  const kasa = '../../assets/ReactCra_kasa.webp';

  return (
    <section id='projets' className='project'>
      <h2>Mes Projets</h2>
      <div className='posi_projects'>
        <div>
          <img src={sophieBluel} alt="image du projet sophie bluel javascript" />
          <div className='posi_button'>
            <button>Javascript Sophie Bluel<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={kasa} alt="image du projet kasa react avec cra" />
          <div className='posi_button'>
            <button>React Kasa<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={argentBank} alt="image du projet argent bank react avec vite" />
          <div className='posi_button'>
            <button>React avec Vite ArgentBank<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;