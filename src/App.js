import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import Gif from './gif';
import { fetchWeatherData } from './controllers/weatherController'

class App extends Component {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.state = {imageUrl: ""};
  }

  success(pos) {
    fetchWeatherData(pos.coords.latitude, pos.coords.longitude)
      .then((weatherData) => {
        this.setState({ imageUrl: weatherData.data.image_url});
      });
  };

  error(err) {
    console.log("error", err);
  };

  componentDidMount() {
    const options = {
      enableHighAccuracy: false,
      timeout: 60000,
      maximumAge: Infinity
    };

    navigator.geolocation.getCurrentPosition(
      this.success,
      this.error,
      options
    );
  }

  render() {
    return (
      <div className="App">
        < NavBar />
        < Gif imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
