/**
 * Client entry point
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {App} from './App';
import {browserHistory, Router, Route} from 'react-router';
const mountApp = document.getElementById('root');

const routes = (
  <Router>
    <Route path="/" component={Home} />
  </Router>
);

const render = Component => {
  ReactDOM.render(
    <App history={browserHistory} routes={}/>,
    mountApp);
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log("Hot loading...");
    render(App)
  });
}

