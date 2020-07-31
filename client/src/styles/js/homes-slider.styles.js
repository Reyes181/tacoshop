import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FeaturedImage = styled.div`
    position:relative;
    height: 30em !important;
    background-repeat:no-repeat !important;
    background-size:cover !important;
    background-position:center !important;
`;

export const FeaturedContent = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5% 0;
    font-family: 'BrandonBold';

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const FeaturedHeader = styled.div`
    flex-basis: 30%;
    text-align: center;
    color: white;
    align-self: center;
    font-size: 3rem;
    font-weight: 700;
    width: 60%;
    text-transform: uppercase;
    line-height: 110%;

    @media screen and (max-width: 800px) {
        flex-basis: 70%;
        font-size: 2.7rem;
        height: 100px;
        line-height: 100px;
    }
`;

export const FeaturedButton = styled(Link)`
    align-self: center;
    width: 15%;
    text-align: center;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    border: 2px solid white;
    padding: 0.6rem;
    margin-top: 1rem;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;