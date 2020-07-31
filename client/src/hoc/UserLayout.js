import React from 'react';

import {UserProfileContainer, UserProfileLeft, NavLinks, UserProfileRight} from '../styles/js/user-layout.styles'

function UserProfileLayout(props)  {
    
    const links = [
        {
            name: "My Account",
            linkTo: '/account/dashboard'
        },
        {
            name: "User Information",
            linkTo: '/account/user_profile'
        },  
        {
            name: "My Cart",
            linkTo: '/checkout'
        }
    ];

    const generateLinks = (links) => (
        links.map((item,i)=>(
            <NavLinks to={item.linkTo} key={i}>
                {item.name}
            </NavLinks>    
        ))    
    );

    return (
        <UserProfileContainer>
            <UserProfileLeft>
                {generateLinks(links)}
            </UserProfileLeft>
            
            <UserProfileRight>
                {props.children}
            </UserProfileRight>
        </UserProfileContainer>
    );
}



export default UserProfileLayout;