import React from 'react';

import '../wind-sunrise/wind-sunrise.css';

const WindSunrise = (props) => {
    
    let sunrise = new Date(props.sun.sunrise * 1000); 
    sunrise = sunrise.toUTCString();

    let sunset = new Date(props.sun.sunset * 1000); 
    sunset = sunset.toUTCString();

    return (
        <div className='wind-sunrise'>
            <div className='wind-left'>
                <p>Wind Speed:&nbsp;</p>
                <p>Wind Heading:&nbsp;</p>
                <p>Sunrise:&nbsp;</p>
                <p>Sunset:&nbsp;</p>
            </div>
            <div className='wind-right'>
                <p>{props.wind.speed}&nbsp;km/h</p>
                <p>{props.wind.deg}&nbsp;°</p>
                <p>{sunrise}</p>
                <p>{sunset}</p>
            </div>
        </div>
    )
}

export default WindSunrise;