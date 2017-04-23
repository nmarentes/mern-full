import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {browserHistory} from 'react-router';
const mountApp = document.getElementById('root');
console.log("My key = " + process.env.GAPI_KEY);
export const GAPI_KEY = process.env.GAPI_KEY;
import routes from "./routes";

const render = Component => {
  ReactDOM.render(
    <App history={browserHistory} routes={routes}/>,
    mountApp);
};

render(App);
