import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {browserHistory, Router, Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {ToDoDemo} from './ToDoDemo';
const mountApp = document.getElementById('root');
console.log("My key = " + process.env.GAPI_KEY);
export const GAPI_KEY = process.env.GAPI_KEY;


const routes = (
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/todo" component={ToDoDemo}/>
  </Router>
);

const render = Component => {
  ReactDOM.render(
    <App history={browserHistory} routes={routes}/>,
    mountApp);
};

render(App);
