import React, {useEffect, useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LoginImg from '../../assets/images/login_img.jpg';
import CreateAccImg from '../../assets/images/create_acc_img.jpg';
import {Login, LoginContainer, LoginHeader, LoginBackground, LoginBackgroundContainer, LoginButton} from '../../styles/js/login.styles';


const SignAndUp = () => {
    const [switchComponent, setSwitchComponent] = useState(false);

    useEffect(() => {
        document.title = 'Account | Taco Shop';
    }, [])

    return (
        <Login>
            

            <LoginContainer>
                <LoginHeader>
                    <h6>Home / Account</h6>
                </LoginHeader>
                {!switchComponent && <SignIn/>}
                {switchComponent && <SignUp/>}
                <h5>{!switchComponent ? "Don't have an account?" : 'Already have an account?'}</h5>
                <LoginButton onClick={() => {setSwitchComponent(!switchComponent)}}>{!switchComponent ? 'Create Account' : 'Login'}</LoginButton>
            </LoginContainer>

            <LoginBackgroundContainer>
                <LoginBackground position={!switchComponent ? 'right' : 'center'} style={{background: `url(${!switchComponent ? LoginImg : CreateAccImg})`}}>
                    <h2>Essentials for any occasion</h2>
                </LoginBackground>
            </LoginBackgroundContainer>
            
        </Login>
    )
}

export default SignAndUp;