import React, {useState} from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {signUpStart} from '../../redux/user/user.action';
import { selectIsLoading } from '../../redux/user/user.selectors';

import {SigninContainer, SigninInput, CreateForm, FormBlock} from '../../styles/js/signin.styles';

import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '../Button';

const SignUp = ({signUpStart, isLoading}) => {
    const [signUpCredential, setSignUpCredential] = useState({email: '', password: '', firstName: '', lastName: ''})
    
    const {email, password, firstName, lastName} = signUpCredential

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
            </CreateForm>
        </SigninContainer>
    )
    
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsLoading
});

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));