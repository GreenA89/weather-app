import React from 'react';

import '../main-weather/main-weather.css';

const MainWeather = (props) => {

    if (props.weather[0]) {
        console.log(props.weather[0].main)
    return (     
        <div className='main-weather'>
            <div className='main-left'>
                <p>Today's Weather: &nbsp;</p>
                <p>Description: &nbsp;</p>
                <p>Cloud Cover: &nbsp;</p>
            </div>
            <div className='main-right'>
                <p>{props.weather[0].main}</p>
                <p>{props.weather[0].description}</p>
                <p>{props.cloud.all}%</p>
            </div>          
        </div>
    )
    } else {
        return (
            <div></div>
        )
    }
}

export default MainWeather;