import React from 'react';
import '../city-container/city-container.css';

const CityContainer = (props) => {
    return (
        <div className='city-container'>
            <p className='city'>{props.city}</p>
            <p className='lat-long'>Longitude: {props.long}, Latitude: {props.lat}</p>
        </div>
    )
}

export default CityContainer;