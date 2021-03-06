import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import App from './app/App';

ReactDOM.render(
// @ts-ignore
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
