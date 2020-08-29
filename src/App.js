import React from 'react';
import './App.css';
// Components
import WeatherApp from './components/weather-app/weather-app';

function App() {
  return (
    <div className="app">
      <div className='background' style={{background: `radial-gradient(circle at top right, yellow 0%, yellow 10%, lightblue calc(10% + 2px), blue 100%)`}}/>
      <div className='background-ground' style={{background: `linear-gradient(180deg, lightgreen 0%, green, darkgreen 50%`}} />
      <div className='decoration'>
        <WeatherApp />
      </div>
      <ul className='credit'>
      <li>by Alex Green</li>
      <li>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; alexander.green1989@hotmail.com</li>
      <li>GitHub:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;https://github.com/GreenA89</li>
      <li>LinkedIn:&nbsp;&nbsp; https://www.linkedin.com/in/alexander-green-3a8542116</li>
      </ul>
    </div>
  );
}

export default App;
