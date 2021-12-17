import React, {useState} from "react";
import Forecast from "./Forecast";
const WeatherView = ({ currentWeather, forecast }) => {

  const { main, weather, name } = currentWeather;
  const { daily } = forecast;
  const icon = (i) => {
    return `http://openweathermap.org/img/wn/${i}@2x.png`;
  };

  return (
    <div className="container-weather">
      <div className="weather">
        <strong>{name}</strong>
        <img src={icon(weather[0].icon)} className="icon" />
        <strong className="temp">{main.temp}°</strong>
      </div>
      <div className="container-forecast ">
        <div className="forecast">
          {daily.map((item, id)=>{
           
          return( <Forecast key={id} id={id} daily={item} icon={icon}/>)
          })}
       </div>
      </div>
    </div>
  );
};

export default WeatherView;
