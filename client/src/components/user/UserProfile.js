import React, {useState, useEffect} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import UserLayout from '../../hoc/UserLayout';
import {UserInfoPanel, UserProfileContainer, UserProfileInput} from '../../styles/js/user-dashboard.styles';
import {updateCurrentUserStart} from '../../redux/user/user.action';
import Button from '../Button';


const UserProfile = ({currentUser, updateCurrentUserStart, history}) => {
    const [userCredential, setUserCredential] = useState({email: '', displayName: ''});
    const [spinner, setSpinner] = useState(false)

    const {displayName, email, id} = currentUser;

    useEffect(() => {
        document.title = 'User Profile - Taco Shop';
        setUserCredential({email: email, displayName: displayName})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        setUserCredential({...userCredential, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const collectionKey = 'users';
        const userId = id;
        await updateCurrentUserStart({collectionKey, userId, userCredential});
        setSpinner(true);
        setTimeout(
            () => { 
                setTimeout(() => {setSpinner(false)}, 2000)  
                history.push('/account/dashboard')
            }
        , 3000);
        
    }

    return (
        <UserLayout>
            <UserInfoPanel>
                <h1>Profile</h1>
                {spinner ? 
                    <LinearProgress />
                    :
                    <UserProfileContainer>
                        <h3>Update Account</h3>

                        <form onSubmit={handleSubmit}>
                            <label>Display Name</label>
                            <UserProfileInput name='displayName' type='text' defaultValue={displayName} required onChange={handleChange}/>

                            <label>Email</label>
                            <UserProfileInput name='email' type='email' defaultValue={email} required onChange={handleChange}/>

                            <Button type='submit'>Update Account</Button>
                        </form>
                    </UserProfileContainer>
                }
            </UserInfoPanel>
        </UserLayout>    
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    updateCurrentUserStart: userCredential => dispatch(updateCurrentUserStart(userCredential))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);