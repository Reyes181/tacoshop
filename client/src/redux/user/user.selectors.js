import {createSelector} from 'reselect';

const selectUser = state => state.user;


export const selectSignInError = createSelector(
    [selectUser],
    user => user.error
);

export const selectIsLoading = createSelector(
    [selectUser],
    user => user.isLoading
);

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

export const selectUserVerified = createSelector(
    [selectUser],
    user => user.userVerified
);

export const selectEmailMessageResult = createSelector(
    [selectUser],
    user => user.emailMessageResult
);

export const selectIsUserLoaded = createSelector(
    [selectUser],
    user => !!user.currentUser
);