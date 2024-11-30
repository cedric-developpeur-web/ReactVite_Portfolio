import React from 'react';
import { useNavigate } from 'react-router-dom';
import './error.scss';

const Error = () => {
  const navigate = useNavigate();
  const previous = () => {
    navigate("/");
  };
  return (
    <section className='dispo_message'>
      <div>
        <h1>Page non trouvée</h1>
        <div className='dispo_btn'>
          <button onClick={previous}>Revenir sur le site</button>
        </div>
      </div>
    </section>
  );
};

export default Error;