import React from 'react';
import SaucePacketError from '../assets/images/sauce-packet-design.png';
import {TacoSpinnerContainer, TacoSpinnerGif} from '../styles/js/taco-spinner.styles'

const NotFound = () => {
    
    return (
        <TacoSpinnerContainer>
            <TacoSpinnerGif style={{background: `url(${SaucePacketError})`, marginTop: '2rem'}}/>
        </TacoSpinnerContainer>
    )
}

export default NotFound;