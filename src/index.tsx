import React from 'react';
import ReactDOM from 'react-dom';
import Routing from 'routing';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';
import DefaultLayout from 'components/layout';

import './styles/base.css';
import './styles/main.css';
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <DefaultLayout>
        <Routing />
      </DefaultLayout>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
