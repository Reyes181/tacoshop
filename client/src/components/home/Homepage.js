import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollections} from '../../redux/shop/shop.selectors';

import HomeSlider from './HomeSlider';
import MainContent from './MainContent';
import {HomeAlert, HomeAlertP} from '../../styles/js/homepage.styles';

function Homepage({shopItems}) {
  
  useEffect(() => {
    document.title = 'Taco Bell Merch, Apparel, & Gifts | Taco Shops';
  }, [])

  return (
    <div>
      <HomeAlert>
        <HomeAlertP>Free domestic shipping for orders over $50</HomeAlertP>
      </HomeAlert>
      <HomeSlider/>
      {shopItems !== null ? <MainContent shopItems={shopItems}/> : <></>}
      
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  shopItems: selectCollections
});

export default connect(mapStateToProps)(Homepage);
