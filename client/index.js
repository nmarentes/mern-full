/**
 * Client entry point
 */

console.log("My key = " + process.env.GAPI_KEY);
export const GAPI_KEY = process.env.GAPI_KEY;


import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {browserHistory, Router, Route} from 'react-router';
const mountApp = document.getElementById('root');
import {Home} from './Home';
import {About} from './About';
import {Container} from './Container';

// console.log("My key = " + JSON.stringify(process.env));


const routes = (
  <Router>
    <Route path="/" component={Container} />
    <Route path="/about" component={About} />
  </Router>
);

const render = Component => {
  ReactDOM.render(
    <App history={browserHistory} routes={routes}  />,
    mountApp);
};

render(App);
