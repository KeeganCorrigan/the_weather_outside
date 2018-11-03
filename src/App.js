import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {latitude: "", longitude: ""};
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: false,
      timeout: 60000,
      maximumAge: Infinity
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => { this.setState({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }) },
      (err) => { console.log("error", err) },
      options
    );
  }

  render() {
    console.log("latitude", this.state.latitude)
    console.log("latitude", this.state.longitude)
    return (
      <div className="App">
        < NavBar />
        < Gif latitude={this.state.latitude} longitude={this.state.longitude} />
      </div>
    );
  }
}

export default App;
