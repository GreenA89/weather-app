import React, { useState } from 'react';
import fetchWeather from '../../API';
//Components
import ResultsContainer from '../results-container/results-container';

import '../weather-app/weather-app.css';


const WeatherApp = () => {

    const [clicked, setClicked] = useState(false);
    const [weather, setWeather] = useState({});
    const [main, setMain] = useState({});
    const [wind, setWind] = useState('');
    const [city, setCity] = useState('');
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [sun, setSun] = useState({})

    const newWeather = async () => {
        setClicked(!clicked)

        const weather = await fetchWeather();
        setMain(weather.main);
        setWeather(weather.weather)
        setWind(weather.wind);
        setCity(weather.name + ', ' + weather.sys.country);
        setLong(weather.coord.lon);
        setLat(weather.coord.lat);
        setSun({sunrise: weather.sys.sunrise, sunset: weather.sys.sunset})
        console.log(weather);
    }

    return (
        <div className='weather-app'>
           {clicked ? 
           <ResultsContainer city={city} lat={lat} long={long} temp={main} wind={wind} sun={sun}/> 
           : 
           <button className='button' onClick={newWeather}>Get Weather!</button>
           }
        </div>
    )
}

export default WeatherApp;