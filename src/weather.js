import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(prop) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      date: "Wednesday 07:00",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row" id="search-bar">
            <div className="col-9">
              <input type="search" placeholder="" className="form-control" />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <div className="cityAndDescription">
              <h4>{weatherData.city}</h4>
              <h5>{weatherData.date}</h5>
              <h5 className="text-capitalize">{weatherData.description}</h5>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />{" "}
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:</li>
              <li>Humidity:{weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fb963945219d8365844e016b8eda02af";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
