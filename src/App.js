import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import Gif from './gif';
import { fetchWeatherData } from './controllers/weatherController'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {imageUrl: ""};
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: false,
      timeout: 60000,
      maximumAge: Infinity
    };

    fetchWeatherData(39.7169604, -105.0443296).then((weatherData) => {
      { this.setState({ imageUrl: weatherData.data.image_url})
      };
    })

    navigator.geolocation.getCurrentPosition(
      (pos) => { this.setState({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }) },
      (err) => { console.log("error", err) },
      options
    );
  }

  render() {
    console.log("image url", this.state.imageUrl)
    return (
      <div className="App">
        < NavBar />
        < Gif imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
