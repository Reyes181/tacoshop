import React, {memo} from 'react';
import {CustomButton} from '../styles/js/button.styles';

const Button = ({children, ...props}) => (
    <CustomButton {...props}>
        {children}
    </CustomButton>
)

export default memo(Button);