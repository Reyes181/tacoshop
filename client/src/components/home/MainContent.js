import React from 'react';
import {Link} from 'react-router-dom';
import ProductSlider from '../ProductSlider';

import Box1 from '../../assets/images/box_1.png';
import Box2 from '../../assets/images/box_2.jpg';
import Box3 from '../../assets/images/box_3.jpg';

import {MainContainer, MainContainerBoxes, Boxes, ContentBox, SecondaryContainer} from '../../styles/js/main-content.styles';

const MainContent = ({shopItems}) => {

    let itemList = shopItems[Math.floor(Math.random() * shopItems.length)]

    return (
        <MainContainer>
            <MainContainerBoxes>
                <Boxes>
                    <ContentBox style={{background: `url(${Box1})`}}>
                        <div>
                            
                            <Link to='/shop/accessories'>
                                <p>Accessories</p>
                            </Link>
                        </div>
                    </ContentBox>
                    <ContentBox style={{background: `url(${Box2})`}}>
                        <div>
                            
                            <Link to='/shop/sauce-packet-collection'>
                                <p style={{fontSize: '0.94rem'}}>Sauce Packet Collection</p>
                            </Link>
                        </div>
                    </ContentBox>
                    <ContentBox style={{background: `url(${Box3})`}}>
                        <div>
                            
                            <Link to='/shop/clothing'>
                                <p>Clothing</p>
                            </Link>
                        </div> 
                    </ContentBox>
                </Boxes>
                <SecondaryContainer>
                    <h5><span>Featured Products</span></h5>
                    {itemList ? 
                        <ProductSlider collection={itemList}/>
                        : null
                    }
                    
                </SecondaryContainer>
            </MainContainerBoxes>
        </MainContainer>    
    );
};

export default  MainContent;