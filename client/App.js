import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Router} from 'react-router';

export class App extends Component {
  static  propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired
  };

  get content() {
    return (<Router history={this.props.history} routes={this.props.routes}/>);
  }

  render() {
    return (
      <div >
        {this.content}
      </div>
    );
  }
}


