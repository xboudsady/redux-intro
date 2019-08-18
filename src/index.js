import React from 'react';
import ReactDOM from 'react-dom';
import action from './modules/action';
import store from './modules/store';

import App from './App';

console.clear();


store.dispatch(action);




ReactDOM.render(<App />, document.querySelector('#root'));