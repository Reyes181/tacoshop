import React from 'react';
import Spinner from './Spinner';

const WithSpinner = WrappedComponent => {
    const loadSpinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <Spinner/>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    };
    return loadSpinner;
};

export default WithSpinner;