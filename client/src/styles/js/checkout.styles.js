import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CheckoutContainer = styled.div`
    position: relative;
    width: 100%;
    background: #fafafa;
`;

export const CheckoutOrder = styled.section`
    width: 80%;
    margin: 0 auto;

    .MuiExpansionPanel-root {
        background: #fafafa !important;
        box-shadow: none !important;
        border-radius: 0em !important;
        border-bottom: 1px solid lightgrey;
    }

    hr {
        width: 40%;
        height: 2px;
        border: 0;
        box-shadow: 0 10px 10px -10px #8c8b8b inset;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const CheckoutOrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    p {
        margin: 0;
    }

    #card {
        width: 30%;
        text-align: center;
        font-weight: 600;
    }

    @media screen and (max-width: 800px) {
        flex-wrap: wrap;

        #card {
            flex-basis: 100%;
            order: 3;
            text-align: initial;
        }
    }
`;

export const CheckoutOrderContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

   
`;

export const CheckoutCouponContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;

    form {
        display: flex;
        width: 100%;
        justify-content: center;

        input {
            width: 100%;
            font-family: "Geometric 415";
            font-size: 13px;
            color: #000000;
            border: 1px solid #f0f0f0;
            height: 46.5px;
            margin: 0px;
            max-width: 100%;
            text-indent: 10px;
            outline: none;
            flex-basis: 50%;
            border-radius: 8px;

            &:focus {
                outline: 0;
                border-color: #449d97;
                box-shadow: 0 0 0 1px #449d97;
            }
        

            &::placeholder {
                font-size: 1.4em;
                font-weight: normal;
                font-family: 'Interstate';
            }
        }

        button {
            flex-basis: 20% !important;
            margin: 0 !important;
            border-radius: 8px !important;
            font-family: 'Interstate';
            font-size: 1.2em;
            background: #c8c8c8;

            &:hover {
                background: #b3b1b1;
            }
        }
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const CheckoutAlert = styled.div`
    display: flex;
    justify-content: center;

    span {
        font-weight: 700;
        color: rgb(68, 157, 151);
    }
`;

export const CheckoutTotalContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    p {
        margin: 0.6rem;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const CheckoutTotalBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CheckoutPrice = styled.p`
    font-family: 'Interstate';
`;

export const CheckoutTotalPrice = styled.p`
    font-size: 1.5em;
    font-family: 'Interstate';
`;

export const CheckoutOldPrice = styled.p`
    color: grey;
    text-decoration: line-through;
    font-family: 'Interstate';
`;

export const CheckoutShippingBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const VerifiedMessage = styled.h3`
    @media screen and (max-width: 800px) {
        font-size: 0.95rem;
    }
`;

export const VerifiedLink = styled(Link)`
    text-align: center;
    font-weight: 700;
    color: white;
    cursor: pointer;
    background: #20B2AA;
    padding: 0.5rem;
`;

