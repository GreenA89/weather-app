import React from 'react';

import '../temp-container/temp-container.css';

const TempContainer = (props) => {
    return (
        <div className='temp-container'>
            <div className='temp-left'>
                <p>Feels Like:&nbsp;</p>
                <p>Humidity:&nbsp;</p>
                <p>Pressure:&nbsp;</p>
                <p>Temp:&nbsp;</p>
                <p>Max Temp:&nbsp;</p>
                <p>Min Temp:&nbsp;</p>
            </div>
            <div className='temp-right'>
                <p>{props.temp.feels_like}&nbsp;°C</p>
                <p>{props.temp.humidity}&nbsp;%</p>
                <p>{props.temp.pressure}&nbsp;mb</p>
                <p>{props.temp.temp}&nbsp;°C</p>
                <p>{props.temp.temp_max}&nbsp;°C</p>
                <p>{props.temp.temp_min}&nbsp;°C</p>
            </div>
        </div>
    )
}

export default TempContainer;