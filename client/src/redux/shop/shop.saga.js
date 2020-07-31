import {all, call, put, takeLatest} from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap, addPurchaseHistory, getUserPurchase } from '../../firebase/firebase.utils';
import {fetchCollectionSuccess, fetchCollectionFailure, purchaseHistorySuccess, 
    purchaseHistoryFailure, fetchPurchaseSuccess, fetchPurchaseFailure} from './shop.action'

import ShopActionTypes from './shop.types';


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

export function* updatePurchasehistory({payload: {collectionKey, userId, purchaseHistory}}) {
    try {
        console.log(collectionKey, userId, purchaseHistory)
       yield call(addPurchaseHistory, collectionKey, userId, purchaseHistory);
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

export function* shopSagas() {
    yield(all([
        call(fetchCollectionsStart),
        call(onPurchaseHistoryStart),
        call(onUserPurchaseStart)
    ]))
}