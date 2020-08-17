import React, { useState, useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';

import Pagination from './Pagination';
import {Link} from 'react-router-dom';
import {CollectionBanner, CollectionContainer, CollectionHeader, CollectionItemBox, CollectionItemsContainer} from '../../styles/js/collection.styles';


// let unsubscribeFromSnapshot = null
const Collection = ({shopItems, title, banner}) => {
    const itemList = shopItems.find(x => x.title === title);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(24);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = itemList.items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const mounted = useRef();

    useEffect(() => {
      document.title = `${title} - Taco Shop`;
      window.scrollTo(0, 0);
      if (!mounted.current) {
        mounted.current = true;
      } else {
        setCurrentPage(1)
      }
    }, [itemList, title]);

    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [currentPage]);
    
    return (
        <CollectionContainer>
          <CollectionHeader>
              <h6>Home / {title}</h6>
              <h3>{title}</h3>
          </CollectionHeader>
          <CollectionBanner style={{background: `url(${banner})`}}/>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={itemList.items.length}
            paginate={paginate}
            currentPageNum={currentPage}
          />
          <CollectionItemsContainer>
            {currentItems.map(item => (
                    <CollectionItemBox key={item.id}>
                        <Link to={{pathname: `/shop/item/${item.name}`, state:{product: item , collection: itemList}}}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            onMouseOver={e => (e.currentTarget.src = item.images.length !== 1 ? item.images[1] : item.images[0])}
                            onMouseLeave={e => (e.currentTarget.src = item.images[0])}
                          />
                        </Link>
                        
                        <h5>{item.name}</h5>
                        <p>${Number.parseFloat(item.price).toFixed(2)}</p>
                    </CollectionItemBox>
                ))
            }
          </CollectionItemsContainer>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={itemList.items.length}
            paginate={paginate}
            currentPageNum={currentPage}
          />
        </CollectionContainer>
      );
    
}

const mapStateToProps = createStructuredSelector({
  shopItems: selectCollections
});



export default connect(mapStateToProps)(Collection);