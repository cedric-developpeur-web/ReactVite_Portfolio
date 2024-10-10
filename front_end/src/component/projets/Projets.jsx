import React from 'react';
import proj from '../../traductor/fr.json';
import { useNavigate } from 'react-router-dom';

const Projets = () => {

  const sophieBluel = '../../assets/javascript_sophieBluel.webp';
  const argentBank = '../../assets/ReactVite_argentBank.webp';
  const kasa = '../../assets/ReactCra_kasa.webp';

  const navigate = useNavigate();

  const redi = (id) => {
    navigate(`/works/${id}`);
  };

  return (
    <section id='projets' className='project'>
      <h2>{proj.projets.description}</h2>
      <div className='posi_projects'>
        <div>
          <img src={sophieBluel} alt="image du projet sophie bluel javascript" />
          <div className='posi_button'>
            <button onClick={() => redi(proj.projets.item1.id)}>{proj.projets.item1.title1}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={kasa} alt="image du projet kasa react avec cra" />
          <div className='posi_button'>
            <button onClick={() => redi(proj.projets.item2.id)}>{proj.projets.item2.title2}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
        <div>
          <img src={argentBank} alt="image du projet argent bank react avec vite" />
          <div className='posi_button'>
            <button onClick={() => redi(proj.projets.item3.id)}>{proj.projets.item3.title3}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projets;