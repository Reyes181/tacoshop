import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    height: 335px;
    margin-bottom: 5rem;
    padding: 0 1rem;
`;

export const ProductCardBox = styled.div`
    border: 1px solid #E0E0E0;
    height: 80%;
`;

export const ProductCardImg = styled.div`
    height: 100%;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    background-position: center !important;
`;

export const ProductCardDetails = styled.div`
    text-align: center;

    p {
        margin: 0;
    }

    div {
        width: 20px;
        height: 20px;
        margin: 0 auto;
        border: 1px solid rgba(0, 0, 0, .2);
    }
`;