import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import MLBuscador from './MLBuscador';
import MLDetalhe from './MLDetalhe';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MLDetalhe />, document.getElementById('root'));
registerServiceWorker();
