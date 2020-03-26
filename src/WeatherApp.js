import React from 'react';
import {data} from './data';
import {WeatherComponent} from './WeatherComponent';


export class WeatherApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      city: null,
      temprature: null,
      currentDate: null,
      currentTime: null,
      showWeather: false,
      weatherForcast: null,
      };
    }
    
    cityName = (e) => {
    var newValue = e.target.value;
     this.setState({city: newValue});
    }
    
    submitClick = () => {
    if (this.state.city === null) {
    window.alert("Please enter your city");
    }

    else {
    var result = [];
    Object.values(data.States).forEach(element=>element.cities.forEach(city=>this.filterCities(city, result, this.state.city)));
    if (result.length > 0) {
        this.setState({
            showWeather: true,
            currentDate: result[0].forecast[0].Date,
            temprature: result[0].forecast[0].temprature,
            currentTime: result[0].forecast[0].Time,
            weatherForcast: result[0].forecast,
        });
    }
    else {
        window.alert("No such a city found, please retry");
    }
    }
   }

   filterCities = (city, result, cities) => {
    if (city.name === cities){
        result = result.push(city);
    }
   }
    
    render() {
    const currentDate = this.state.currentDate;
    const showWeather = this.state.showWeather;
    const currentWeather = this.state.currentWeather;
    const currentTime = this.state.currentTime;
    const temprature = this.state.temprature;
      return (
        <div>
          <h2>Weather App</h2>
          {!showWeather && <form>
                            <h2>Enter City</h2>
                            <input onChange={this.cityName}/>    
                           <button onClick={this.submitClick}>Search</button>
          </form>}
          {showWeather && <WeatherComponent currentWeather={currentWeather} 
          temprature={temprature} 
          currentDate={currentDate} 
          currentTime={currentTime}
          currentCity={this.state.city}
          weatherForcast={this.state.weatherForcast}/>
          }
          
        </div>
      );
    }
  }