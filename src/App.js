import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./components/Searchbar";
import WeatherView from "./components/WeatherView";
import GeoAlt from "./components/GeoAlt";
import Footer from "./components/Footer";
import Index from "./components/Index";
function App() {
  const [city, setCity] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [coord, setCoord] = useState();
  const [geoLocation, setGeoLocation] = useState(false);
  const [error, setError] = useState(false);
  const apiKey = "cfc0bb2a30e6c158d818575f9fd77655";
  let app = document.getElementsByClassName("App");

  const resetState = ()=>{
    setCurrentWeather()
    setForecast()
    setCity()
    setCoord()
    app[0].classList.remove("App-content")
  }

  async function getWeather(URL) {
    let response;
    if (URL === 1) {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`
      );
      let datoscurrentWeather = await response.json();
      if (response.status === 200) {
        setCurrentWeather(datoscurrentWeather);
        setCoord(datoscurrentWeather.coord);
        app[0].classList.add("App-content")
        return;
      } else {
        setError(true);
        throw response.status
      }
    } else if (URL === 2) {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`
      );
      let datoscurrentWeather = await response.json();
      if (response.status === 200) {
        setForecast(datoscurrentWeather);
        return;
      } else {
        setError(true);
        throw response.status
      }
    } else if (URL === 3) {
      response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&lang=sp&units=metric&appid=${apiKey}`
      );
      let datoscurrentWeather = await response.json();
      if (response.status === 200) {
        setCurrentWeather(datoscurrentWeather);
        app[0].classList.add("App-content")
        return;
      } else {
        setError(true);
        throw response.status
      }
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    let input = e.target.firstChild;
    setCity(input.value);
    setGeoLocation(false);
    setError(false)
    input.value = "";
    setTimeout(() => {
      setCity();
    }, 2000);
  };
  const animation = (e) => {
    let element = document.getElementById("index");
    element.classList.add("animation");
    setTimeout(() => {
      element.classList.remove("animation");
      handlerLocation();
    }, 200);
  };
  const handlerLocation = (e) => {
    !geoLocation ? setGeoLocation(true) : setGeoLocation(false);
    geoLocation ? setCity() : console.log("...");
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(position)
      : alert("geolocation not find");
    setError(false)
  };
  const position = (pos) => {
    setCoord({
      lon: pos.coords.longitude,
      lat: pos.coords.latitude,
    });
  };

  useEffect(() => {
    if (coord) {
      getWeather(2);
    }
    if (error) {
      resetState()
    }
  }, [coord, error]);
  useEffect(() => {
    if (!city && coord) {
      getWeather(3);
    } else if (city && coord) {
      geoLocation ? getWeather(3) : getWeather(1);
    } else if (city) {
      getWeather(1);
    }
  }, [city, coord]);

  return (
    <div className="App">
      <div className="search-bar">
        <Searchbar handleSearch={handleSearch} />
        <GeoAlt handlerLocation={handlerLocation} geoLocation={geoLocation} />
      </div>
      {error && <Index message={"Ups... we couldn't find your weather"} animation={animation}/>}
      {(forecast && currentWeather && !error) && (
        <WeatherView currentWeather={currentWeather} forecast={forecast} />
      )}
      {(!currentWeather && !geoLocation && !city && !error)&& (
      <Index message='Search your weather' animation={animation}/>
      )}
      {((city && !currentWeather) || (geoLocation && !currentWeather)) && (
        <div className="spinner-border text-info loading" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
