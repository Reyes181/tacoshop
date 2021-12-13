import ShopActionTypes from './shop.types';

const INITIAL_STATE =  {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
    userPurchase: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_USERS_PURCHASE_SUCCESS:
            return {
                ...state,
                userPurchase: action.payload
            }
        case ShopActionTypes.SEND_PRUCHASE_EMAIL_SUCCESS:
            return {
                ...state,
                purchaseSuccess: action.payload
            }
        case ShopActionTypes.SEND_PURCHASE_EMAIL_FAILURE:
            return {
                ...state,
                isFetching: false,
                purchaseSuccess: action.payload,
                errorMessage: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
        case ShopActionTypes.PURCHASE_HISTORY_FAILURE:
        case ShopActionTypes.FETCH_USERS_PURCHASE_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: return state
    }
}

export default shopReducer;