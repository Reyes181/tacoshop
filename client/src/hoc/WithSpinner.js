import React from 'react';
import TacoSpinner from './TacoSpinner';

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <TacoSpinner/>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    };
    return Spinner;
};

export default WithSpinner;