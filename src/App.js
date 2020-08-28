import React from 'react';
import './App.css';
// Components
import WeatherApp from './components/weather-app/weather-app';

function App() {
  return (
    <div className="app">
      <div className='decoration'>
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
