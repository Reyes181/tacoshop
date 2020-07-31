import React from 'react';
import TacoGif from '../assets/images/taco_gif.gif';
import {TacoSpinnerContainer, TacoSpinnerGif} from '../styles/js/taco-spinner.styles.js';

const TacoSpinner = () => {
    return (
        <TacoSpinnerContainer>
            <TacoSpinnerGif style={{background: `url(${TacoGif})`}}/>
        </TacoSpinnerContainer>
    )
};

export default TacoSpinner;