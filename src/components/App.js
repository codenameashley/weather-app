/* eslint-disable react/function-component-definition */
import "../styles/App.css";
import React, { useState } from "react";
import propTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

export default function App({ forecasts, location }) {
  const { city, country } = location;
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  return (
    <div className="weather-app">
      <header>Bikini Bottom News</header>
      <main>
        <LocationDetails city={city} country={country} />
        <ForecastSummaries forecasts={forecasts} />
        <ForecastDetails forecast={selectedForecast} />
      </main>
    </div>
  );
}

App.propTypes = {
  forecasts: propTypes.arrayOf(
    propTypes.shape({
      date: propTypes.number,
      description: propTypes.string,
      icon: propTypes.string,
      temperature: propTypes.shape({
        max: propTypes.number,
        min: propTypes.number,
      }),
      wind: propTypes.shape({
        speed: propTypes.number,
        direction: propTypes.string,
      }).isRequired,
    })
  ).isRequired,
  location: propTypes.shape({
    city: propTypes.string,
    country: propTypes.string,
  }).isRequired,
};
