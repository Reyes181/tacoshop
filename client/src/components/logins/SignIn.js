import React, {useState, useEffect} from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectSignInError, selectIsLoading } from '../../redux/user/user.selectors';
import {auth} from '../../firebase/firebase.utils';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action';

import Button from '../Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import {SigninContainer, SigninInput, ButtonContainer, GoogleContent, GoogleIconBox, LoginForm} from '../../styles/js/signin.styles';
import GoogleIcon from '../../assets/images/google.png';



const SignIn = ({emailSignInStart, googleSignInStart, userError, isLoading}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    const [switched, setSwitched] = useState(false);
    const [formSuccess, setFormSuccess] = useState('');
    const [formError, setFormError] = useState('');
    

    const {email, password} = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        emailSignInStart(email, password);
    }

    const handleChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        setCredentials({...userCredentials, [name]: value});
    }

    const switchToReset = () => {
        setSwitched(!switched);
    }

    const successMessage = () => {
        setTimeout(()=> {
            setSwitched(!switched);
            setFormSuccess('');
        },2000)
    }

    useEffect(() => {
        if(userError){
            setFormError(userError.message)
        }
    }, [userError])

    const handleReset = async (e) => {
        e.preventDefault();

        const valid = /\S+@\S+\.\S+/.test(email)

        if(email !== ''){
            if(valid){
                try{
                    await auth.sendPasswordResetEmail(email)
                    setCredentials({email: '', password: ''})
                    setFormSuccess('Password reset link has been sent to your email!');
                    setFormError('');
                    successMessage();
                } catch (error){
                    console.log(error);
                }
            } else {
                setFormError('Must be a valid email address')
            }
        }
    }

    
    return (
        <SigninContainer>
            {switched ?
            <>
                <h3>Reset your password</h3>
                <span>We will send you an email to reset your password</span>

                <form onSubmit={handleReset}>
                    <label>Email</label>
                    <SigninInput name='email' type='email' value={email} required onChange={handleChange}/>
                    <h4 style={{color: '#00CCCC'}}>{formSuccess}</h4>
                    <h4 style={{color: '#FF3366'}}>{formError}</h4>
                    <Button type='submit'>Submit</Button>
                    <span onClick={switchToReset}>Cancel</span>
                </form>
            </>
            :
            <>
                <h3>Login</h3>

                
                <LoginForm onSubmit={handleSubmit}>
                    {!isLoading ?
                        <>
                            <label>Email</label>
                            <SigninInput name='email' type='email' value={email} required onChange={handleChange}/>

                            <label>Password</label>
                            <SigninInput name='password' type='password' value={password} required onChange={handleChange}/>
                            <span onClick={switchToReset}>Forgot password?</span>

                            <ButtonContainer>
                                <Button type='submit'>Login</Button>
                                <Button type='button' onClick={googleSignInStart} isGoogle>
                                    <GoogleContent>Login with Google</GoogleContent>
                                    <GoogleIconBox style={{background: `url(${GoogleIcon})`}}/>
                                </Button>
                                {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                            </ButtonContainer>
                        </>
                        :
                        <CircularProgress/>
                    }
                    
                </LoginForm>
                    
                    
                
                <h4 style={{color: '#FF3366'}}>{formError}</h4>
            </>
            }
        </SigninContainer>
    )
    
}

const mapStateToProps = createStructuredSelector({
    userError: selectSignInError,
    isLoading: selectIsLoading
});

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));