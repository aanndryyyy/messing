import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './lib/registerServiceWorker';

import Landing from './components/views/Landing';

import badge from './img/messing_badge.svg';
import './styles/index.css';

ReactDOM.render(
  <div>
    <Landing />
    
    <img className="static-badge" src={badge} alt="Messing Badge" styles />
  </div>,
  document.getElementById('root')
);

  registerServiceWorker();
