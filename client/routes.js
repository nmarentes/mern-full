import React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {ToDoDemo} from './ToDoDemo';

export default (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/todo" component={ToDoDemo} />
  </Router>
);

