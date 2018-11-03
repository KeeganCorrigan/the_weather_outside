import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar';
import Gif from './gif';
import SimpleCard from './simpleCard';
import SimpleBottomNavigation from './simpleBottomNavigation'
import { fetchWeatherData } from './controllers/weatherController'

class App extends Component {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.state = {imageUrl: "", apparentTemperature: "", summary: ""};
  }

  success(pos) {
    fetchWeatherData(pos.coords.latitude, pos.coords.longitude)
      .then((weatherData) => {
        this.setState({ imageUrl: weatherData.data.image_url, apparentTemperature: weatherData.data.apparent_temperature, summary: weatherData.data.summary});
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
        < SimpleCard summary={this.state.summary} temperature={this.state.apparentTemperature} />
        < SimpleBottomNavigation />
      </div>
    );
  }
}

export default App;
