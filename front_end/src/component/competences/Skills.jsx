import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import './skill.scss';

const Skills = () => {
  const { t } = useTranslation();
  ;
  return (
    <>
      <span><h2>Compétence niveau débutant</h2></span>
      <div className='skill'>
        <article>
          <h3>Langages déclaratifs</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
          </ul>
        </article>
        <article>
          <h3>Langage de programmation</h3>
          <ul>
            <li>JavaScript</li>
          </ul>
        </article>
        <article>
          <h3>Framework Build</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Redux</li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default Skills;