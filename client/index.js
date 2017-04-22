/**
 * Client entry point
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {App} from './App';

const mountApp = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    mountApp);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log("Hot loading...");
    render(App)
  });
}

