import React from 'react';
import {Router, Route} from 'react-router';
import {Home} from './Home';
import {About} from './About';
import {ToDoDemo} from './ToDoDemo';

<<<<<<< HEAD
export default (
  <Router>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/todo" component={ToDoDemo} />
=======
export default  (
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/todo" component={ToDoDemo}/>
>>>>>>> f4b65baf15398b91506010b3cdedf3b2e206d745
  </Router>
);