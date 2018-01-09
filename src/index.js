import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './components/views/Landing';

import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(
  <Landing />,
  document.getElementById('root')
);

  registerServiceWorker();
