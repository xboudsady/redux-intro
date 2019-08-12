import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';

import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));