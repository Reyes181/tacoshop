import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionStart());
        const markers = [];
        collectionRef.get().then(querySnapshot => {
            
                querySnapshot.docs.forEach(doc => {
                markers.push(doc.data());
            });
        })
        .then(() => {
            const collectionsMap = convertCollectionsSnapshotToMap(markers);
            dispatch(fetchCollectionSuccess(collectionsMap))
        })
        .catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
};

export const purchaseHistoryStart = ({collectionKey, userId, purchaseHistory, currentUser}) => ({
    type: ShopActionTypes.PURCHASE_HISTORY_START,
    payload: {collectionKey, userId, purchaseHistory, currentUser}
});

export const purchaseHistorySuccess = () => ({
    type: ShopActionTypes.PURCHASE_HISTORY_SUCCESS
})

export const purchaseHistoryFailure = (error) => ({
    type: ShopActionTypes.PURCHASE_HISTORY_FAILURE,
    payload: error
});

export const fetchPurchaseStart = ({collectionKey, currentId}) => ({
    type: ShopActionTypes.FETCH_USERS_PURCHASE_START,
    payload: {collectionKey,  currentId}
});

export const fetchPurchaseSuccess = (purchaseRef) => ({
    type: ShopActionTypes.FETCH_USERS_PURCHASE_SUCCESS,
    payload: purchaseRef
});

export const fetchPurchaseFailure = (error) => ({
    type: ShopActionTypes.FETCH_USERS_PURCHASE_FAILURE,
    payload: error
});

export const sendPurchaseEmailStart = (data) => ({
    type: ShopActionTypes.SEND_PURCHASE_EMAIL_START,
    payload: data
});

export const sendPurchaseEmailSuccess = (data) => ({
    type: ShopActionTypes.SEND_PRUCHASE_EMAIL_SUCCESS,
    payload: data
});

export const sendPurchaseEmailFailure = (error) => ({
    type: ShopActionTypes.SEND_PURCHASE_EMAIL_FAILURE,
    payload: error
});
