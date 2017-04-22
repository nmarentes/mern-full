import React, {Component} from 'react';
import  {Router} from 'react-router';
import propTypes from 'prop-types';
//import 'font-awesome/css/font-awesome.css';

import styles from './App.css';

export class App extends Component {
  content() {
    return (<Router/>);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.content}
        <p>Hello</p>
      </div>
    );
  }
}


