import React from 'react';
import './rain-icon.css';

const RainIcon = () => {
    return (
        <div>
            <div className='rain-icon' />
            <div className='rain'>
                <div className='rain-drop one' />
                <div className='rain-drop two' />
                <div className='rain-drop three' />
            </div>
        </div>
    )
}

export default RainIcon;