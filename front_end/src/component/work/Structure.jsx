import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import { useParams } from 'react-router-dom';
import datas from '../../traductor/fr.json';
import PageError from '../../page/PageError';
import './structure.scss';

const Structure = () => {
  const { t } = useTranslation();
  // récuperation des données de la catégorie projets dans le fichier (fr.json)
  // vient reécuperer chaque donnée en fonction de l'id
  const { id } = useParams();
  const projets = datas.projets;
  // recuperation des données en fonction de leur id sans utiliser la constante t
  const annonce = Object.values(projets).find((item) => item.id === id);
  if (!annonce) {
    return <PageError />
  }
  // recuperation des données en fonction de leur id avec l'utilisationd de la constante t
  const key = Object.keys(projets).find(key => projets[key].id === id);
  if (!key) {
    return <PageError />
  }
  // récupération des données du fichier json (fr.josn) pour le tableau picture
  // vient créer une balise img pour chaque élément
  const logoImage = (pictures) => {
    return pictures.map((picture, event) => (
      <img key={event} src={picture.src} alt={picture.alt} />
    ));
  };
  const principalImage = (image) => {
    return image.map((image, even) => (
      <img key={even} src={image.src} alt={image.alt} />
    ));
  };
  const secondaireImage = (images) => {
    return images.map((images, e) => (
      <img key={e} src={images.src} alt={images.alt} />
    ));
  };
  const navigate = useNavigate();
  const redi = () => {
    navigate('/');
  };

  const redirection = () => {
    window.open(annonce.weblink, '_blank');
  };
  return (
    <>
      <section className='structure'>
        <div className='posi_button'>
          <button onClick={redi}><i className="fa-solid fa-arrow-left"></i>{t(`projets.${key}.next`)}</button>
        </div>
        <div className='posi_div_princial'>
          {principalImage(annonce.image)}
        </div>
        <div className='posi_div_secondaire'>
          {secondaireImage(annonce.images)}
        </div>
        <div className='dispo_information'>
          <h2>{annonce.tag}</h2>
          <p>{t(`projets.${key}.information`)}</p>
        </div>
        <div className='posi_techno'>
          {logoImage(annonce.picture)}
        </div>
        <div className='posi_btn'>
          <button onClick={redirection}><i className="fa-brands fa-github"></i>{t(`projets.${key}.link`)}<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </section>
    </>
  );
};

export default Structure;