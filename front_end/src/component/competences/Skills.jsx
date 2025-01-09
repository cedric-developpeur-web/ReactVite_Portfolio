import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../traduction_i18next/i18next';
import './skill.scss';

const Skills = () => {
  const { t } = useTranslation();
  const skills = t("skill", { returnObjects: true });
  ;
  return (
    <>
      <span><h2>Compétence niveau débutant</h2></span>
      <div className='skill'>
        {skills.map((e) => (
          <article key={e.id}>
            <h3>{t(e.title)}</h3>
            <ul>
              {e.competence.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  );
};

export default Skills;