import axios from 'axios';

export const fetchWeatherData = async (latitude, longitude) => {
  try {
    return await axios.get(`https://whats-the-weather-like-outside.herokuapp.com/api/v1/weather?latitude=${latitude}&longitude=${longitude}`)
  } catch (error) {
    console.error(error)
  }
}
