import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    userVerified: null,
    emailMessageResult: [{message: '', success: false}],
    signUpSuccess: null,
    isLoading: false,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UserActionTypes.EMAIL_SIGN_IN_START:
            return {
                isLoading: true
            };
        case UserActionTypes.SIGN_UP_START:
            return {
                isLoading: true
            };
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false,
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.USER_VERIFIED_SUCCESS:
            return {
                ...state,
                userVerified: action.payload,
                error: null
            }
        case UserActionTypes.SEND_EMAIL_VERIFICATION_SUCCESS:
            return {
                ...state,
                emailMessageResult: action.payload,
                error: null
            }
        case UserActionTypes.CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                error: null
            }
        case UserActionTypes.CLEAR_EMAIL_MESSAGE:
            return {
                ...state,
                emailMessageResult: [{message: '', success: true}]
            }
        case UserActionTypes.SIGN_UP_EMAIL_SUCCESS:
            return {
                ...state,
                signUpSuccess: action.payload
            }
        case UserActionTypes.SIGN_UP_EMAIL_FAILURE:
            return {
                ...state,
                signUpSuccess: action.payload,
                error: action.payload.message,
                isLoading: false
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.UPDATE_CURRENT_USER_FAILURE:
        case UserActionTypes.USER_VERIFIED_FAILURE:
        case UserActionTypes.SEND_EMAIL_VERIFICATION_FAILURE:
            return {
                ...state,
                error: action.payload.message,
                isLoading: false
            }

        default:
            return state
    }
}

export default userReducer;