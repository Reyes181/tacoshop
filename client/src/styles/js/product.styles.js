import styled from 'styled-components';

export const ProductContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem auto;

    @media screen and (max-width: 800px) {
        width: 95%;
    }
`;

export const ProductHeader = styled.div`
    text-align: center;

    h6 {
        color: #616161;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 0.8rem;
        margin: 0;
    }

    h3 {
        color: #616161;
        font-weight: bold;
    }
`;

export const ProductDetailContainer = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;

    button {
        margin: 0 auto;
        width: 85%;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ProductImageContainer = styled.div`
    flex-basis: 50%;
    display: flex;
    flex-wrap: wrap;
    height: 45rem;

    @media screen and (max-width: 800px) {
        height: auto;
    }
`;

export const ProductMainImage = styled.div`
    flex-basis: 100%;
    background-position: center !important;
    background-repeat: no-repeat !important;
    height: 70%;
    background-size: contain !important;
    margin: 0 2rem;

    @media screen and (max-width: 800px) {
        margin: auto;
        height: 20rem;
    }
`;

export const ProductImages = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    height: 30%;
    margin: 0 2rem;

    @media screen and (max-width: 800px) {
        height: 9rem;
    }
`;

export const Productimage = styled.div`
    flex-basis: 25%;
    background-position: center !important;
    background-repeat: no-repeat !important;
    height: 80%;
    background-size: contain !important;
    margin: 0 0.5rem;
`;

export const ProductDetails = styled.div`
    flex-basis: 35%;
    display: flex;
    flex-direction: column;
    background: white;
    height: 45rem;

    div{
        width: 85%;
    }
`;

export const ProductTitles = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 12px;
    margin: 0 auto;

    h3{
        margin: 1rem 0 0 0;
        color: #616161
    }

    p {
        margin: 0 0 0.5rem 0;
        font-weight: 600;
    }
`;

export const ProductColors = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    div {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid grey;
    }

    p {
        margin: 0 0 0.5rem 0;
        font-weight: 700;
        color: #616161;
    }
`;

export const ProductSizes = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 1rem;

    p {
        margin: 0 0 0.5rem 0;
        font-weight: 700;
        color: #616161;
    }
`;

export const ProductSizeButtons = styled.div`
    display: flex;

    button {
        display: inline-block;
        zoom: 1;
        padding: 0;
        background-color: #fff;
        margin: 0px 3px 10px;
        cursor: pointer;
        border: 1px solid #eee;
        position: relative;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        min-width: 44px !important;
        height: 34px !important;
        line-height: 34px;
        white-space: nowrap;
        text-transform: uppercase;
        text-align: center;

        &:focus {
            background-color: #0c0c0c !important; 
            border: 1px solid #0c0c0c !important; 
            color: #fff !important;
            outline: 0;
        }
    }
`;

export const ProductQuantity = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export const ProductDesc = styled.div`
    margin: 0 auto;
    font-size: 0.9rem;
    padding-bottom: 1rem;
`;

export const ProductMaterials = styled.div`
    margin: 0 auto;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    flex-basis: 35%;

    li {
        padding: 0.5rem;
    }
`;

export const ProductButtonDisabled = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    margin: 0 auto;

    button {
        width: 100%;
        max-width: 100%;
        background: #346b68;
        color: #ffffff;
        font-family: 'Interstate';
        border: none;
        display: inline-block;
        font-size: 1.1rem;
        font-weight: normal;
        text-decoration: none;
        cursor: not-allowed;
        margin-bottom: 15px;
        line-height: normal;
        height: 50px;
        letter-spacing: 1px;
        margin-top: 15px;

        &:focus {
            outline: 0;
        }
    }

    span {
        color: #db145d;
        text-align: center;
        font-weight: 700;
    }
`;

export const ProductCollectionContainer = styled.section`
    h5 {
        width: 100%;
        max-width: 370px;
        display: table;
        margin: 20px auto 30px;
        position: relative;

        span {
            font-family: 'BrandonBold';
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            color: #7c7c7c;
            background: #fefefe;
            position: relative;
            z-index: 99;
            padding: 0 15px;
            margin: 0 auto;
            display: table;
        }

        &:after {
            content: "";
            background: #cccccc;
            height: 1px;
            width: 100%;
            position: absolute;
            top: 10px;
            left: 0;
            right: 0;
        }
    }
`;