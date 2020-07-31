import React, {useEffect, Suspense, lazy} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Switch, Route, Redirect} from 'react-router-dom';

import {selectCurrentUser, selectIsUserLoaded} from './redux/user/user.selectors';
import {checkUserSession, userVerified} from './redux/user/user.action';
import { fetchCollectionStart } from './redux/shop/shop.action';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from './redux/shop/shop.selectors';

import Layout from './hoc/Layout';
import WithSpinner from './hoc/WithSpinner';
import ErrorBoundary from './hoc/ErrorBoundary';
import TacoSpinner from './hoc/TacoSpinner';

import SauceBanner from './assets/images/sauce-packets-banner.jpg';
import ClothingBanner from './assets/images/clothing-banner.jpg';
import AccessoriesBanner from './assets/images/accessories-banner.png';


const HomePage = lazy(() => import('./components/home/Homepage')) ;
const Collection = lazy(() => import('./components/shops/Collection'));
const ShowPage = lazy(() => import('./components/shops/ShowPage'));
const UserDashboard = lazy(() => import('./components/user/UserDashboard'));
const UserProfile = lazy(() => import('./components/user/UserProfile'));
const CheckoutPage = lazy(() => import('./components/checkout/Checkout'));
const SignAndUp = lazy(() => import('./components/logins/SignAndUp'));


const HomePageSpinner = WithSpinner(HomePage);
const CollectionSpinner = WithSpinner(Collection);
const ShowPageSpinner = WithSpinner(ShowPage);

const App = ({fetchCollectionStart, checkUserSession, userVerified, isCollectionFetching, isCollectionLoaded, currentUser, isUserLoaded}) => {

  useEffect(() => {
    fetchCollectionStart();

    checkUserSession();
    
    userVerified();
  }, [checkUserSession, fetchCollectionStart, userVerified])
  
  return (
    <div>
      <Layout>
        <Switch>
          <Suspense fallback={<TacoSpinner/>}>
          <ErrorBoundary>
            <Route 
              exact 
              path="/" 
              render={
                (props) => <HomePageSpinner  isLoading={isCollectionFetching} {...props}/>
              }
            />
            <Route 
              exact 
              path="/shop/sauce-packet-collection" 
              render={
                routeParams => <CollectionSpinner isLoading={!isCollectionLoaded} title={'Sauce Packet Collection'} banner={SauceBanner} {...routeParams}/>
              }
            />
            <Route 
              exact 
              path="/shop/clothing" 
              render={
                routeParams => <Collection title={'Clothing'} banner={ClothingBanner} {...routeParams}/>
              }
            />
            <Route 
              exact 
              path="/shop/accessories" 
              render={
                routeParams => <Collection title={'Accessories'} banner={AccessoriesBanner} {...routeParams}/>
              }
            />
            <Route
              exact
              path='/shop/item/:handle'
              render={
                (props) => <ShowPageSpinner isLoading={!isCollectionLoaded} {...props}/>
              }
            />
          
            <Route
              exact
              path='/checkout'
              render={
              (routeParams) => currentUser ? (<CheckoutPage {...routeParams}/>) : ( <Redirect to='/account/login'/>) 
              }
            />
            <Route
              exact
              path='/account/dashboard'
              render={
                routeParams => currentUser ? <UserDashboard  {...routeParams}/> : (<Redirect to='/account/login'/>)
              }
            />
            <Route
              exact
              path='/account/user_profile'
              render={
                routeParams => currentUser ? <UserProfile {...routeParams}/> : (<Redirect to='/account/login'/>)
              }
            />
            <Route
              exact
              path='/account/login'
              render={
                () => currentUser ?( <Redirect to='/'/>) : (<SignAndUp/>)
              }
            />
          </ErrorBoundary>
          </Suspense>
        </Switch>
      </Layout>
    </div>
  );
  
  
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
  currentUser: selectCurrentUser,
  isUserLoaded: selectIsUserLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
  checkUserSession: () => dispatch(checkUserSession()),
  userVerified: () => dispatch(userVerified())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
