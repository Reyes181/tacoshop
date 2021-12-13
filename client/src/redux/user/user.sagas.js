import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure, 
        signUpFailure, signUpSuccess, updateCurrentUserSuccess, updateCurrentUserFailure,
        userVerifiedSuccess, userVerifiedFailure, sendEmailVerifyFailure, sendEmailVerifySuccess,
        signupEmailFailure, signupEmailSuccess
} from './user.action';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser, 
    updateCurrentUserInfo, checkUserVerified, sendVerification
} from '../../firebase/firebase.utils';
import {SIGN_UP_SERVER} from '../serverMisc';
import Axios from 'axios';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot.data()}));
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInstart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch(error) {
        yield put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* isUserVerified() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userResult = yield call(checkUserVerified, userAuth);
        yield put(userVerifiedSuccess(userResult));
    } catch(error) {
        yield put(userVerifiedFailure(error))
    }
}

export function* onIsUserVerified() {
    yield takeLatest(UserActionTypes.USER_VERIFIED, isUserVerified)
}

export function* sendEmailVerification() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const resultMessage = yield call(sendVerification, userAuth);
        yield put(sendEmailVerifySuccess(resultMessage))
    } catch(error) {
        yield put(sendEmailVerifyFailure(error))
    }
}

export function* onSendEmailVerification() {
    yield takeLatest(UserActionTypes.SEND_EMAIL_VERIFICATION, sendEmailVerification)
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        
        yield put(signUpSuccess({user, additionalData: {displayName}}))
        yield put(sendSignUpEmail({'to': email, 'name': displayName, 'token': user , 'type': 'welcome'}))
    } catch(error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* updateUser({payload: {collectionKey, userId, userCredential}}) {
    try {
       yield call(updateCurrentUserInfo, collectionKey, userId, userCredential);
       yield put(updateCurrentUserSuccess());
    } catch (error) {
        yield put(updateCurrentUserFailure(error))
    }
}

export function* onUpdateCurrentUserStart() {
    yield takeLatest(UserActionTypes.UPDATE_CURRENT_USER_START, updateUser)
}

export function* refreshAfterUpdate() {
    yield isUserAuthenticated();
}

export function* onUpdateCurrentUserSuccess() {
    yield takeLatest(UserActionTypes.UPDATE_CURRENT_USER_SUCCESS, refreshAfterUpdate)
}

const putSignUpEmail = async (data) => {
    let results;
    await Axios.post(`${SIGN_UP_SERVER}`, data)
    .then(res => results = res.data);
    return results;
}

export function* sendSignUpEmail(data){
    try{
        const emailSent = yield call(putSignUpEmail, data)
        yield put(emailSent.success ? signupEmailSuccess(emailSent) : signupEmailFailure(emailSent))
    } catch(error){
        yield put(signupEmailFailure(error))
    }
}

export function* onSignUpEmailStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_EMAIL_START, sendSignUpEmail)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInstart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onUpdateCurrentUserStart),
        call(onUpdateCurrentUserSuccess),
        call(onIsUserVerified),
        call(onSendEmailVerification),
        call(onSignUpEmailStart)
    ])
}