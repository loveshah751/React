import React from "react";
import Title from "./Components/Titles";
import Form from "./Components/Form";

import Weather from "./Components/Weather";
import { async } from "rxjs/internal/scheduler/async";
import { __await } from "tslib";

const API_key = "cc84405f297081a6df3d1590088f6c43";
class App extends React.Component {
  // State is object that lives within the component and its responsible for keeping track of changing data within the component.

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humditiy: undefined,
    description: undefined,
    error: undefined
  };

  //Method to make an API call
  // e is just event object in javascript, nothing related to React

  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // Fetch is fetchapi method of javascript which accept the the URL
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`
    );

    const data = await api_call.json();
    //checking if API returns values for city, state and etc

    if (city && country) {
      if (data.name != null) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humditiy: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humditiy: undefined,
          description: undefined,
          error: "No Record found for your input!"
        });
      }

      console.log(data);
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humditiy: undefined,
        description: undefined,
        error: "Please enter the values!"
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
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
