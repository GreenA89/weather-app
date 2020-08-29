import React from 'react';

import '../main-weather/main-weather.css';

const MainWeather = (props) => {

    if (props.weather[0]) {

    let description = props.weather[0].description;
    description = description.split(' ')
                             .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
                             .join(' ');

    return (     
        <div className='main-weather'>
            <div className='main-div'>
                <p className='p' >Today's Weather: &nbsp;</p>
                <p className='p' >Description: &nbsp;</p>
                <p className='p' >Cloud Cover: &nbsp;</p>
            </div>
            <div className='main-div'>
                <p className='p' >{props.weather[0].main}</p>
                <p className='p' >{description}</p>
                <p className='p' >{props.cloud.all}%</p>
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