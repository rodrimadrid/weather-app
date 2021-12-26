import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./components/Searchbar";
import WeatherView from "./components/WeatherView";

function App() {
  const [city, setCity] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [coord, setCoord] = useState();

  const apiKey = "cfc0bb2a30e6c158d818575f9fd77655";

  async function getWeather(URL) {
    if (URL === 1) {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`
      );
      let datoscurrentWeather = await response.json();
      setCurrentWeather(datoscurrentWeather);
      setCoord(datoscurrentWeather.coord);
    } else if (URL === 2) {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`
      );
      let datoscurrentWeather = await response.json();
      setForecast(datoscurrentWeather);
    } else if (URL === 3) {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&lang=sp&units=metric&appid=${apiKey}`
      );
      let datoscurrentWeather = await response.json();
      setCurrentWeather(datoscurrentWeather);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let input = e.target.firstChild;
    setCity(input.value);
  
  };
  const getLocation = () => {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(position)
      : console.log("ubicacion no disponible");
  };
  const position = (pos) => {
    setCoord({
      lon: pos.coords.longitude,
      lat: pos.coords.latitude,
    });
  };
  useEffect(() => {
    getLocation();
  }, []);
  useEffect(() => {
   coord ?  getWeather(2) : console.log('coords not found')
  }, [coord]);
  useEffect(() => {
    if (!city && coord) {
      getWeather(3);
    }
  }, [city, coord]);
  useEffect(() => {
    city? getWeather(1) : console.log('city not found');
  }, [city])

  return (
    <div className="App">
      <Searchbar handleSearch={handleSearch} />
      {forecast && currentWeather && (
        <WeatherView currentWeather={currentWeather} forecast={forecast} />
      )}
      {!currentWeather && (
        <div className="spinner-border text-info loading" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default App;
