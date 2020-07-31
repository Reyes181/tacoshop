import React from 'react';
import SaucePacketError from '../assets/images/sauce-packet-design.png';
import {TacoSpinnerContainer, TacoSpinnerGif} from '../styles/js/taco-spinner.styles'

class ErrorBoundary extends React.Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false
        };
    }

    static getDerivedStateFromError(error) {
        return {hasErrored: true}
    }

    componentDidCatch(error, info) {
        console.log(error)
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <TacoSpinnerContainer>
                    <TacoSpinnerGif style={{background: `url(${SaucePacketError})`, marginTop: '2rem'}}/>
                </TacoSpinnerContainer>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;