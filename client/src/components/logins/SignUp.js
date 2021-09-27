import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {signUpStart, clearErrorMessage} from '../../redux/user/user.action';
import { selectIsLoading, selectSignInError } from '../../redux/user/user.selectors';

import {SigninContainer, SigninInput, CreateForm, FormBlock} from '../../styles/js/signin.styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '../Button';

const SignUp = ({signUpStart, isLoading, userError}) => {
    const [signUpCredential, setSignUpCredential] = useState({email: '', password: '', firstName: '', lastName: ''})
    const [formError, setFormError] = useState('');
    const {email, password, firstName, lastName} = signUpCredential;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userError !== null){
            setFormError(userError)
        };
        const timeout = setTimeout(() => {
            setFormError('');
            dispatch(clearErrorMessage());
         }, 4000);
         return () => clearTimeout(timeout);
    }, [userError, dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();

        let displayName = (firstName + ' ' + lastName);

        signUpStart({email, password, displayName});
    }

    const handleChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        setSignUpCredential({...signUpCredential, [name]: value})
    }

    return (
        <SigninContainer>
            <h3>Create Account</h3>

            <CreateForm onSubmit={handleSubmit}>
                {!isLoading ?
                    <>
                        <FormBlock>
                            <label>First Name</label>
                            <SigninInput name='firstName' type='text' value={firstName} required onChange={handleChange}/>
                        </FormBlock>

                        <FormBlock>
                            <label>Last Name</label>
                            <SigninInput name='lastName' type='text' value={lastName} required onChange={handleChange}/>
                        </FormBlock>
                        
                        <FormBlock>
                            <label>Email</label>
                            <SigninInput name='email' type='email' value={email} required onChange={handleChange}/>
                        </FormBlock>
                        
                        <FormBlock>
                            <label>Password</label>
                            <SigninInput name='password' type='password' value={password} required onChange={handleChange}/>
                        </FormBlock>
                        
                        <Button type='submit'>Create Account</Button>
                    </>
                :
                    <CircularProgress/>
                }
                 <h4 style={{color: '#FF3366'}}>{formError}</h4>
            </CreateForm>
        </SigninContainer>
    )
    
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading,
    userError: selectSignInError
});

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));