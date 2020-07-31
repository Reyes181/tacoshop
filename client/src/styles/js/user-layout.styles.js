import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const UserProfileContainer = styled.section`
    display:flex;
    margin-top: 5.3em;
    margin-bottom: 5em;
    min-height: 700px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        margin: 0 0 1rem 0;
    }
`;

export const UserProfileLeft = styled.section`
    border-right: 1px solid #f8f8f8; 
    margin-top: 2em;
`;

export const NavLinks = styled(Link)`
    display: block;
    border-bottom: 1px solid #dddddd;
    font-size: 20px;
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    padding: 10px 0px;
    width: 280px;
    color: #000;
`;

export const UserProfileRight = styled.section`
    flex-grow: 1;
    padding: 0 0 0 29px;

    @media screen and (max-width: 800px) {
        padding: 0;
    }
`;