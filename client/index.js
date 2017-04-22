/**
 * Client entry point
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {browserHistory, Router, Route} from 'react-router';
const mountApp = document.getElementById('root');
import {Home} from './Home';
import {About} from './About';

const routes = (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Router>
);

const render = Component => {
  ReactDOM.render(
    <App history={browserHistory} routes={routes}  />,
    mountApp);
};

render(App);
