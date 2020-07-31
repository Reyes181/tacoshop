import styled from 'styled-components';

export const MainContainer = styled.div`
    margin: 0 auto;
    padding: 0 12%;

    @media screen and (max-width: 800px) {
        padding: 0 5%;
    }
`;

export const MainContainerBoxes = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`;

export const Boxes = styled.div`
    display: flex;
    height: 25rem;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        height: 100vh;
    }
`;

export const ContentBox = styled.div`
    flex-basis: 30%;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    div {
        border: 2px solid white;
        width: 70%;
        margin-bottom: 2rem;
        padding: 0.2rem;
        cursor: pointer;
        opacity: 0.8;
        height: 17%;

        p {
            color: grey;
            text-align: center;
            background: white;
            padding: 1.2rem;
            margin: 0;
            text-transform: uppercase;
            font-family: 'BrandonBold';
        }
    }

    :hover{
        opacity: 0.8;
    }

    @media screen and (max-width: 800px) {
        background-size: cover !important;
        align-items: center;

        div {
            margin-bottom: 0;
            height: auto;
        }
    }
`

export const SecondaryContainer = styled.div`
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

        :after {
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