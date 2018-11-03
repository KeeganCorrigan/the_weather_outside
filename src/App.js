import React, { Component } from 'react';
import { fetchWeatherData } from './controllers/weatherController'
import './App.css';
import AboutCard from './aboutCard';
import DarkSkyCard from './darkSkyCard';
import Gif from './gif';
import NavBar from './navbar';
import SimpleCard from './simpleCard';
import SimpleBottomNavigation from './simpleBottomNavigation'

class App extends Component {
  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.state = {imageUrl: "", apparentTemperature: "", summary: "", value: 0};
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

  handleChange = (value) => {
    this.setState({value: value})
  }

  renderCardContent = (value) => {
    if (value === 1) {
      return < DarkSkyCard />
    } else if (value === 2) {
      return <AboutCard />
    }

    return (
      < SimpleCard summary={this.state.summary} temperature={this.state.apparentTemperature} />
    )
  }

  render() {
    return (
      <div className="App">
        < NavBar temperature={this.state.apparentTemperature}/>
        < Gif imageUrl={this.state.imageUrl} />
        { this.renderCardContent(this.state.value) }
        < SimpleBottomNavigation onChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
