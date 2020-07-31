import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../redux/user/user.selectors';
import Cart from './checkout/Cart';

import TacoBrand from '../assets/images/taco_brand.png';
import {MainHeader, Nav, HeaderContainer, HeaderBrand, HeaderItemsContent, HeaderButtonContainer, 
    HeaderButton, HeaderNavContainer, HeaderNavUl} from '../styles/js/header.styles';

function Header({currentUser})  {
    
    return (
        <MainHeader>
            <Nav>
                <HeaderContainer>
                    <HeaderItemsContent>
                        <HeaderBrand to='/'>
                            <img alt='brand_img' src={TacoBrand}/>
                        </HeaderBrand>
                        <HeaderButtonContainer>
                            <div>
                                {currentUser ? (
                                    <HeaderButton to='/account/dashboard'>
                                        Account
                                    </HeaderButton>
                                ) : (
                                    <HeaderButton to='/account/login'>
                                        Login
                                    </HeaderButton>
                                )}
                                
                            </div>
                            <Cart/>
                        </HeaderButtonContainer>
                        <HeaderNavContainer>
                            <HeaderNavUl>
                                <li>
                                    <Link to='/shop/sauce-packet-collection'>
                                        Suace Packet Collection
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop/clothing'>
                                        Clothing
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/shop/accessories'>
                                        Accessories
                                    </Link>
                                </li>
                            </HeaderNavUl>
                        </HeaderNavContainer>
                    </HeaderItemsContent>
                </HeaderContainer>
            </Nav>
        </MainHeader>
        );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);