import React from 'react';
import WeatherBlock from './WeatherBlock';
import './App.css';

export class WeatherComponent extends React.Component {
    constructor(props) {
      super(props);
    }  
    
    render() {

       const forcastCities = this.props.weatherForcast;
       const blocks =forcastCities.map((item, index)=>{
        return <WeatherBlock
        currentDate={item.Date} 
        temprature={item.temprature} 
        currentTime={item.Time}
        feels={item.feels}
        key={index}
       />  
       });

      return (
        <div>
          <form>
            <h3> Current Date: {this.props.currentDate} </h3>
            <h3>Current Time: {this.props.currentTime}</h3>
            <h3>Current City: {this.props.currentCity}</h3> 
            <h3>Temprature: {this.props.temprature}</h3>
              <div className="centerBlock">{blocks}</div>                
          </form>
        </div>
      );
    }
  }