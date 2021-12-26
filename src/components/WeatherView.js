import React from "react";
import Forecast from "./Forecast";
import WeatherDetail from "./WeatherDetail";
const WeatherView = ({ currentWeather, forecast }) => {

  const { main, weather, name, wind } = currentWeather;
  const { daily } = forecast;
  const icon = (i) => {
    return `http://openweathermap.org/img/wn/${i}@2x.png`;
  };

  return (
    <div className="container-weather">
      <div className="weather">
        <strong>{name}</strong>
        <img src={icon(weather[0].icon)} className="icon" />
        <strong className="temp">{Math.round(main.temp)}° C</strong>
        <strong className="text-muted">{weather[0].description}</strong>
      </div>
      <div className="container-forecast justify-content-xxl-center">
        <div className="forecasts">
          {daily.map((item, id)=>{
            return( id !== 7 &&  <Forecast key={id} id={id} daily={item} icon={icon}/>)
          })}
       </div>
      </div>
      <div className="container-fluid d-md-flex justify-content-md-around ">
        <WeatherDetail title='Wind status' detail={wind.speed} detailUnit='m/s'/>
        <WeatherDetail title='Air pressure' detail={main.pressure} detailUnit='hPa'/>
        <WeatherDetail title='Humidity' detail={main.humidity} detailUnit='%'/>
      </div>
    </div>
  );
};

export default WeatherView;
