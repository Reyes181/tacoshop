import UserActionTypes from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const userVerified = () => ({
    type: UserActionTypes.USER_VERIFIED
});

export const userVerifiedSuccess = (userResult) => ({
    type: UserActionTypes.USER_VERIFIED_SUCCESS,
    payload: userResult
});

export const userVerifiedFailure = (error) => ({
    type: UserActionTypes.USER_VERIFIED_FAILURE,
    payload: error
});

export const sendEmailVerify = () => ({
    type: UserActionTypes.SEND_EMAIL_VERIFICATION
});

export const sendEmailVerifySuccess = (resultMessage) => ({
    type: UserActionTypes.SEND_EMAIL_VERIFICATION_SUCCESS,
    payload: resultMessage
});

export const sendEmailVerifyFailure = (error) => ({
    type: UserActionTypes.SEND_EMAIL_VERIFICATION_FAILURE,
    payload: error
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredential) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredential
});

export const signUpSuccess = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: {user, additionalData}
});

export const signUpFailure = (error) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: error
});

export const updateCurrentUserStart = ({collectionKey, userId, userCredential}) => ({
    type: UserActionTypes.UPDATE_CURRENT_USER_START,
    payload: {collectionKey, userId, userCredential}
});

export const updateCurrentUserSuccess = () => ({
    type: UserActionTypes.UPDATE_CURRENT_USER_SUCCESS
});

export const updateCurrentUserFailure = (error) => ({
    type: UserActionTypes.UPDATE_CURRENT_USER_FAILURE,
    payload: error
})

