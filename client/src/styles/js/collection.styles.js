import styled from 'styled-components';

export const CollectionContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1rem auto;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const CollectionHeader = styled.div`
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

export const CollectionBanner = styled.div`
    background-position: center !important;
    background-size: cover !important;
    height: 25rem;
    background-repeat: no-repeat !important;
    width: 100%;
`;

export const CollectionItemsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem 0 1.5rem 2rem;
    font-family: 'Josefin Sans', sans-serif;

    @media screen and (max-width: 800px) {
        margin: auto;
        overflow-Y: scroll;
        height: 100vh;
    }
`;

export const CollectionItemBox = styled.div`
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2.4rem;

    div {
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-size: contain !important;
        height: 17rem;
        border: 1px solid #D8D8D8;
        width: 90%;
        cursor: pointer;
    }

    img {
        height: 17rem;
        border: 1px solid #D8D8D8;
        width: 90%;
        cursor: pointer;
    }

    h5 {
        margin: 0.5rem 0 0.3rem 0;
        font-weight: 300;
        width: 90%;
        font-size: 0.78rem;
    }

    p {
        margin: 0;
        font-size: 0.9rem;
        width: 90%;
    }

    @media screen and (max-width: 800px) {
        flex-basis: 100%;

        img {
            height: 25rem;
        }

        h5 {
            width: 90%;
            font-size: 1.5rem;
            margin: -3rem auto 0 auto;
            background: black;
            color: white;
            font-family: 'Interstate';
        }

        p {
            width: 90%;
            font-size: 1.2rem;
            font-weight: 600;
            background: black;
            margin: 0 auto;
            color: white;
            font-family: 'Interstate';
        }
    }
`;