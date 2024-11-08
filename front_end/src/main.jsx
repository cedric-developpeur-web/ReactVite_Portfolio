import React from 'react';
import './traduction_i18next/i18next.js';
import ReactDOM from 'react-dom/client';
import Routeur from './Routeur.jsx';
import './scss/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routeur />
  </React.StrictMode>,
)
