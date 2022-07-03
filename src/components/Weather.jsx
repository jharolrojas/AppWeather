import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import useGetData from "../hooks custom/useGetData";

const Weather = () => {
  const [ubication, setUbication] = useState({});
  const [change, setChange] = useState(true);
  const { dateDay, hour } = useGetData();
  let color = "froshBackground";

  useEffect(() => {
    const success = (pos) => {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=1c01f07c895cff6eb7e70ef612699848`
        )
        .then((res) => setUbication(res.data));
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return (
    <div className={`container ${color}`}>
      <div className="weatherCard">
        <div className="descriptionPrimary">
          <h1>Weather App</h1>
          <h2>
            {ubication?.name} {ubication.sys?.country}
          </h2>
          <img
            style={{ width: "30%" }}
            src={`http://openweathermap.org/img/wn/${ubication.weather?.[0].icon}@2x.png`}
          />
          <h3>{hour}</h3>
          <h3>{dateDay}</h3>
          <div className="elementDescriptionSecond">
            <i className="fas fa-cloud"></i>
            <b> {ubication.weather?.[0].description}</b>
          </div>
        </div>
        <div className="descriptionSecond">
          <div className="elementDescriptionSecond">
            <i className="fas fa-thermometer-half"></i>
            <b>
              {change
                ? `${Math.round(ubication.main?.temp - 273.15)} C°`
                : `${Math.round(((ubication.main?.temp - 273.15) * 9/5) + 32)} F`} 
            </b>
          </div>
          <div className="elementDescriptionSecond">
            <i className="fas fa-wind"></i>
            <b>{`${ubication.wind?.speed} m/s`}</b>{" "}
          </div>
          <div className="elementDescriptionSecond">
            <i className="fas fa-tint"></i>
            <b> {`${ubication.main?.humidity} %`}</b>
          </div>
        </div>
        <button onClick={() => setChange(!change)}><b>C/F</b></button>
      </div>
    </div>
  );
};

export default Weather;
