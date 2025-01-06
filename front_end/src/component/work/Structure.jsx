import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import datas from '../../traductor/fr.json';
import PageError from '../../page/PageError';
import './structure.scss';

const Structure = () => {
  const { t } = useTranslation();
  // la condition vient vérifier si le fichier fr.json existe bien aussi on je retourne une page
  if (!datas) {
    return <PageError />
  }
  // permet le retour a la page d'accueil
  const navigate = useNavigate();
  const redirectionHome = () => {
    navigate('/');
  };

  // Ouvrir le lien en fonction de l'ID
  const webLink = (id) => {
    const project = datas.projets.find((item) => item.id === id);
    // la condition vient vérifier si dans le tableau projet il y a une clé link si oui récuperer le lien
    if (project?.link) {
      window.open(project.link, '_blank');
    } else {
      console.error('lien non trouvé');
    }
  };

  return (
    <>
      <section className='structure'>
        <div className='posi_button'>
          <button onClick={redirectionHome}><i className="fa-solid fa-arrow-left"></i>{t(`next`)}</button>
        </div>
      </section>
      <section className='container_card'>
        {datas.projets.map((projects) => (
          <div key={projects.id} className='card'>
            <img src={projects.miniPicture[0].src} alt={projects.miniPicture[0].alt} />
            <h3>{t(projects.title)}</h3>
            <p>{t(projects.description)}</p>
            <div className='dispo_button'>
              <button onClick={() => webLink(projects.id)}>{t(projects.tag)}</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Structure;