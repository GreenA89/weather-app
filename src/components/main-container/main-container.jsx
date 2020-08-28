import React from 'react';
// Components
import TempContainer from '../temp-container/temp-container';
import WindSunrise from '../wind-sunrise/wind-sunrise';

import '../main-container/main-container.css';

const MainContainer = (props) => {
    return(
        <div className='main-container'>
            <div className='left-div'>
                <TempContainer temp={props.temp} />
                <WindSunrise wind={props.wind} sun={props.sun} />
            </div>
            <div className='right-div'>

            </div>
        </div>
    )
}

export default MainContainer;