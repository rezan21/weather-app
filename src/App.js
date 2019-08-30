import React, { Component } from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

// open weather app api token
const API_KEY = '9eb3640b6d4ec66c2ca3c4b0750c01c6';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // fetch data and save them in a const.
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&appid=${API_KEY}`
    );
    // convert the saved data to json files
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.list[0].main.temp,
        city: data.list[0].name,
        country: data.list[0].sys.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the city and country.'
      });
    }
  };
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='rowsa thisa'>
                <div className='col-xs-5 title-container'>
                  <Titles />
                </div>
                <div className='col-xs-7 form-container'>
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
