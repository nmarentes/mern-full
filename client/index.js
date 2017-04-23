import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
<<<<<<< HEAD
import {browserHistory, Router, Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {ToDoDemo} from './ToDoDemo';
import routes from './routes';

const mountApp = document.getElementById('root');
console.log("My key = " + process.env.GAPI_KEY);
export const GAPI_KEY = process.env.GAPI_KEY;

=======
import {browserHistory} from 'react-router';
const mountApp = document.getElementById('root');
console.log("My key = " + process.env.GAPI_KEY);
export const GAPI_KEY = process.env.GAPI_KEY;
import routes from "./routes";
>>>>>>> f4b65baf15398b91506010b3cdedf3b2e206d745

const render = Component => {
  ReactDOM.render(
    <App history={browserHistory} routes={routes}/>,
    mountApp);
};

render(App);
