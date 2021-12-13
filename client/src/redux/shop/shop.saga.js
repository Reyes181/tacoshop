import {all, call, put, takeLatest} from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap, addPurchaseHistory, getUserPurchase } from '../../firebase/firebase.utils';
import {fetchCollectionSuccess, fetchCollectionFailure, purchaseHistorySuccess, 
    purchaseHistoryFailure, fetchPurchaseSuccess, fetchPurchaseFailure, sendPurchaseEmailSuccess, sendPurchaseEmailFailure} from './shop.action'
import { PURCHASE_SERVER } from '../serverMisc';
import ShopActionTypes from './shop.types';
import Axios from 'axios';


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const markers = [];
    
        yield collectionRef.get().then(querySnapshot => {
                querySnapshot.docs.forEach(doc => {
                markers.push(doc.data());
            });
        })
        
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, markers);
        
        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
        yield fetchCollectionFailure(error.message);
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}

export function* updatePurchasehistory({payload: {collectionKey, userId, purchaseHistory, currentUser}}) {
    try {
       yield call(addPurchaseHistory, collectionKey, userId, purchaseHistory, currentUser);
       yield put(purchaseHistorySuccess());
    } catch (error) {
        yield put(purchaseHistoryFailure(error))
    }
}

export function* onPurchaseHistoryStart() {
    yield takeLatest(ShopActionTypes.PURCHASE_HISTORY_START, updatePurchasehistory)
}

export function* getPurchaseHistory({payload: {collectionKey, currentId}}) {
    try {
        const purchaseRef = yield call(getUserPurchase, collectionKey, currentId);
        
        yield put(fetchPurchaseSuccess(purchaseRef))
        
    } catch (error) {
        yield put(fetchPurchaseFailure(error))
    }
}

export function* onUserPurchaseStart() {
    yield takeLatest(ShopActionTypes.FETCH_USERS_PURCHASE_START, getPurchaseHistory)
}

const putPurchaseEmail = async (data) => {
    let results;
    await Axios.post(`${PURCHASE_SERVER}`, data)
    .then(res => results = res.data);
    return results;
}

export function* sendPurchaseEmail(data){
    try {
        const emailSent = yield call(putPurchaseEmail, data)
        yield put(emailSent.success ? sendPurchaseEmailSuccess(emailSent) : sendPurchaseEmailFailure(emailSent))
    } catch(error){
        yield put(sendPurchaseEmailFailure(error))
    }
}

export function* onSendPurchaseEmailStart(){
    yield takeLatest(ShopActionTypes.SEND_PURCHASE_EMAIL_START, sendPurchaseEmail)
}

export function* shopSagas() {
    yield(all([
        call(fetchCollectionsStart),
        call(onPurchaseHistoryStart),
        call(onUserPurchaseStart),
        call(onSendPurchaseEmailStart)
    ]))
}