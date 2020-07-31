import styled from 'styled-components';


export const CartItemContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto 1rem auto;
    flex-wrap: wrap;

    hr {
        flex-basis: 60%;
        border: 0; 
        height: 1px; 
        background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const CartItemImageBox = styled.div`
    flex-basis: 10%;
    height: 5rem;
    border-radius: 8px;
    background: #fff;

    @media screen and (max-width: 800px) {
        height: 10rem;
    }
`;

export const CartItemImage = styled.div`
    width: 100%;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;
    z-index: 1;
`;

export const CartItemDesc = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0.5rem;
    font-size: 0.8rem;

    p {
        flex-basis: 100%;
        margin: 0;
    }

    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`;

export const CartItemAttr = styled.div`
    display: flex;
    flex-basis: 100%;

    div {
        border-radius: 10px;
        height: 20px;
        flex-basis: 5%;
    }

    p {
        padding-left: 0.5rem;
        font-size: 1rem;
        line-height: 18px;
    }

    @media screen and (max-width: 800px) {
        margin: 1rem;

        div {
            flex-basis: 80%;
            border-radius: 0px;
        }

        p {
            flex-basis: 20%;
        }
    }
`;

export const CartItemPrice = styled.div`
    flex-basis: 20%;
    display: flex;
    justify-content: space-around;
    font-size: 0.8rem;
`;

export const CartItemQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.8rem 0;

    span {
        font-weight: 700;
        cursor: pointer;

        &:hover {
            color: #449d97;
        }
    }

    p {
        margin: 0;
    }
`;

export const CartRemovebutton = styled.div`
    border-radius: 50px;
    flex-basis: 10%;
    justify-content: center;
    text-align: center;
    height: 22%;
    font-weight: 700;

    &:hover {
        background: #449d97;
        color: #fff;
        cursor: pointer;
    }
`;