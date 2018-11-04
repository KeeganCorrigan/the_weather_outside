import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';

var options = {
  enableHighAccuracy: false,
  timeout: 2000,
  maximumAge: 0
};

const success = (pos) => {
  this.setState({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
}

const error = (err) => {
  console.log("error", err)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {latitude: "", longitude: ""};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  render() {
    console.log("latitude", this.state.latitude)
    console.log("latitude", this.state.longitude)
    return (
      <div className="App">
        < NavBar />
      </div>
    );
  }
}

export default App;
