import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import { useParams } from 'react-router-dom';
import datas from '../../traductor/fr.json';

const Structure = () => {
  const { t } = useTranslation();
  // récuperation des données de la catégorie projets dans le fichier (fr.json)
  // vient reécuperer chaque donnée en fonction de l'id
  const { id } = useParams();
  const projets = datas.projets;
  const annonce = Object.values(projets).find((item) => item.id === id);
  if (!annonce) {
    return <p>projet non trouvé</p>
  }
  // récupération des données du fichier json (fr.josn) pour le tableau picture
  // vient créer une balise img pour chaque élément
  const logoImage = (pictures) => {
    return pictures.map((picture, event) => (
      <img key={event} src={picture.src} alt={picture.alt} />
    ));
  };

  const navigate = useNavigate();
  const redi = () => {
    navigate('/');
  };
  return (
    <>
      <section className='structure'>
        <div className='posi_button'>
          <button onClick={redi}><i className="fa-solid fa-arrow-left"></i>{annonce.next}</button>
        </div>
        <div className='posi_div_princial'>
          <img src="" alt="" />
        </div>
        <div className='posi_div_secondaire'>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className='dispo_information'>
          <h2>{annonce.tag}</h2>
          <p>{annonce.information}</p>
        </div>
        <div className='posi_techno'>
          {logoImage(annonce.picture)}
        </div>
        <div className='posi_btn'>
          <button><i className="fa-brands fa-github"></i>{annonce.link}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </section>
    </>
  );
};

export default Structure;