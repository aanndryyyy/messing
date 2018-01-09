import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './lib/registerServiceWorker';

import Landing from './components/views/Landing';

import './styles/index.css';

ReactDOM.render(
  <Landing />,
  document.getElementById('root')
);

  registerServiceWorker();
