import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser, selectUserVerified, selectEmailMessageResult} from '../../redux/user/user.selectors';
import {selectUserPurchase} from '../../redux/shop/shop.selectors';
import {fetchPurchaseStart} from '../../redux/shop/shop.action';
import {signOutStart, sendEmailVerify, userVerified, clearEmailMessage} from '../../redux/user/user.action';

import UserLayout from '../../hoc/UserLayout';

import {UserInfoPanel, UserInfoContent, MessageContainer, MessageContent} from '../../styles/js/user-dashboard.styles';
import {HeaderButton} from '../../styles/js/header.styles';
import UserPurchase from './UserPurchase';
import LinearProgress from '@material-ui/core/LinearProgress';

function UserDashboard({currentUser, userIsVerified, userPurchase, fetchPurchaseStart, signOutStart, sendEmailVerify, emailMessageResult, userVerified})  {
    const [state, setState] = useState({message: '', verified: false});
    const [disabled, setDisabled] = useState(false);
    const [sendingEmail, setSendingEmail] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState('');
    const [messageFailed, setMessageFailed] = useState('');
    const {displayName, email, id} = currentUser;
    const dispatch = useDispatch();


    useEffect(() => {
        document.title = 'User Dasboard - Taco Shop';
        const collectionKey = 'userProfile';
        const currentId = id; 
        fetchPurchaseStart({collectionKey, currentId})
        userVerified();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const successMessage = () => {
        setTimeout(()=> {
            setMessageSuccess('');
            setDisabled(false);
            dispatch(clearEmailMessage())
        },5000)
    }

    const handleVerify = () => {
       setSendingEmail(true);
       sendEmailVerify();
    }

    useEffect(() => {
        setState(userIsVerified !== undefined && userIsVerified[0])
    }, [userIsVerified]);

    useEffect(() => {
        const handleMessage =  () => {
            setSendingEmail(false);
            let success = emailMessageResult[0].success;
            let message = emailMessageResult[0].message;
        
            if(success){
                setMessageSuccess(message);
                setDisabled(true);
                successMessage();
            } else {
                setMessageFailed(message)
            }
            
        }
        if(emailMessageResult){
            handleMessage()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emailMessageResult])
    

    return (
            <UserLayout>
                <UserInfoPanel>
                    <h1>Account Information</h1>
                    <UserInfoContent>
                        <span>Name: {displayName}</span>
                        <span>Email: {email}</span>
                    </UserInfoContent>
                    
                    <HeaderButton style={{marginRight: '2rem'}} to='/account/user_profile'>
                        Update Info
                    </HeaderButton>
                    <HeaderButton to='/' onClick={signOutStart}>
                        Log Out
                    </HeaderButton>
                    <MessageContainer>
                        {state.verified ?
                            <MessageContent style={{color: '#00A693'}}>{state.message}</MessageContent>
                            :
                            <>
                                <MessageContent>{state.message}</MessageContent>
                                {sendingEmail ?
                                    <LinearProgress/>
                                :
                                    <HeaderButton to='/account/dashboard' disabled={disabled} onClick={handleVerify}>Verify Email</HeaderButton>
                                }
                                
                            </>
                        }
                    </MessageContainer>
                    <h4 style={{color: '#00CCCC'}}>{messageSuccess}</h4>
                    <h4 style={{color: '#FF3366'}}>{messageFailed}</h4>
                </UserInfoPanel>

                <UserInfoPanel>
                    <h1>Purchase History</h1>
                    <UserInfoContent>
                        {state.verified ?
                            <>
                            {userPurchase ? 
                                <>
                                    {userPurchase.length !== 0 ?
                                    <>
                                        {userPurchase.map((item, i) =>(
                                            <UserPurchase key={i} item={item}/>
                                        ))}
                                    </>
                                    :
                                        <h4>No purchase(s) have been made</h4>
                                    }
                                </>
                                :
                                    <LinearProgress/>
                            }
                            </>
                            :
                            <h4>Verify your email address to view purchase history.</h4>
                        }
                        
                        
                    </UserInfoContent>
                </UserInfoPanel>
            </UserLayout>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    userIsVerified: selectUserVerified,
    userPurchase: selectUserPurchase,
    emailMessageResult: selectEmailMessageResult
})

const mapDispatchToProps = dispatch => ({
    fetchPurchaseStart: purchaseCredential => dispatch(fetchPurchaseStart(purchaseCredential)),
    signOutStart: () => dispatch(signOutStart()),
    sendEmailVerify: () => dispatch(sendEmailVerify()),
    userVerified: () => dispatch(userVerified())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);