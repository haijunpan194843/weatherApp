import React from 'react';
import './App.css';

const WeatherBlock = (props)=> (

 <div className="block">
    <h3>Date: {props.currentDate}</h3>
<h3> Temprature: {props.temprature}</h3>
<h3 >Feels Like: {props.feels}</h3>
</div> 


);

export default WeatherBlock;