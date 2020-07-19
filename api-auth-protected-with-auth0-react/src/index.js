import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.hydrate(<App initialLocation={window.location.pathname} />, document.getElementById('root'));