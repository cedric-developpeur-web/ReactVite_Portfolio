import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const previous = () => {
    navigate("/");
  };
  return (
    <section className='dispo_message'>
      <div>
        <h1>Page non trouver</h1>
        <div className='dispo_btn'>
          <button onClick={previous}>revenir sur le site</button>
        </div>
      </div>
    </section>
  );
};

export default Error;