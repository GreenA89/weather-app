import React from 'react';
// Components
import CityContainer from '../city-container/city-container';
import MainContainer from '../main-container/main-container';
import '../results-container/results-container.css';

const ResultsContainer = (props) => {

    return (
        <div className='results-container'>
            <CityContainer city={props.city} lat={props.lat} long={props.long} />
            <MainContainer temp={props.temp} sun={props.sun} wind={props.wind} weather={props.weather} cloud={props.cloud}/>
        </div>
    )
}

export default ResultsContainer;