import React from 'react';
import techJavascript from '../../assets/logo_javascript.webp';
import techHtml from '../../assets/logo_html.webp';
const Structure = () => {
  return (
    <>
      <section className='structure'>
        <div className='posi_button'>
          <button><i className="fa-solid fa-arrow-left"></i>Retour aux projets</button>
        </div>
        <div className='posi_div_princial'>
          <img src="" alt="" />
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, molestias.</p> */}
        </div>
        <div className='posi_div_secondaire'>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className='dispo_information'>
          <h2>Sophie Bluel</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nihil consequuntur ut vitae. Aliquam ipsa ducimus minus alias, beatae architecto.</p>
        </div>
        <div className='posi_techno'>
          <img src={techJavascript} alt="" />
          <img src={techHtml} alt="" />
        </div>
        <div className='posi_btn'>
          <button><i className="fa-brands fa-github"></i>lien projet github<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </section>
    </>
  );
};

export default Structure;