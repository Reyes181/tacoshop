import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop !== null ? shop.collections : []
);

export const selectUserPurchase = createSelector(
    [selectShop],
    shop => shop !== null ? shop.userPurchase : []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)

export default selectCollections;