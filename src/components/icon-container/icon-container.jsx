import React from 'react';
//Components
import SunIcon from '../weather-icons/sun-icon/sun-icon';
import RainIcon from '../weather-icons/rain-icon/rain-icon';
import CloudIcon from '../weather-icons/cloud-icon/cloud-icon';
import NightClearIcon from '../weather-icons/night-clear-icon/night-clear-icon';

import '../icon-container/icon-container.css';

const IconContainer = (props) => {

    if (props.weather[0]) {
            
        let sunset = new Date(props.sun.sunset * 1000); 
        sunset = sunset.toUTCString();

        let currentTime = new Date();

        console.log(sunset)
        console.log(currentTime)

        return (
            <div className='icon-container' >
                {   
                    props.cloud.all < 20 && currentTime > sunset ?
                    <NightClearIcon />
                    :
                    props.cloud.all < 20 && currentTime < sunset ?
                    <SunIcon />
                    :
                    props.weather[0].main.includes('Rain') ?
                    <RainIcon />
                    :
                    <CloudIcon />
                }            
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default IconContainer;