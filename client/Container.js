import React from 'react';
import {Map, Marker, InfoWindow,  GoogleApiWrapper} from 'google-maps-react';
import {GAPI_KEY} from  'index';

export class Container extends React.Component {
  render() {
    return (
      <div>
        Hello from the container
        //<Map troy="hello" google={this.props.google}/>
      </div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyDbsyk7Yx-Ucg481bIJRyHNojnH2psjtsA"
})(Container)