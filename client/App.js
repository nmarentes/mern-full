import React, {Component} from 'react';

import styles from './App.css';

export class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>Environment: {process.env.NODE_ENV} </h1>
      </div>
    );
  }
}


