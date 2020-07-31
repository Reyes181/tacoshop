import styled from 'styled-components';

export const MainFooter = styled.footer`
    background: #f2f2f2;
    padding: 45px 0 35px;
    border-top: 4px solid #692c8c;
`;

export const FooterContainer = styled.div`
    width: 70%;
    display: flex;
    margin: 0 auto;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const FootLeft = styled.div`
    flex-basis: 60%;
    display: flex;
    flex-direction: column;

    h2 {
        text-transform: uppercase;
        color: #616161;
        font-family: 'Interstate';
        margin-bottom: 0px;
        font-weight: 300;
        font-size: 30px;
    }

    form {
        display: flex;
        width: 80%;
        flex-wrap: wrap;

        div:nth-child(1) {
            flex-basis: 72%;
            margin-bottom: 0.5rem;
            input {
                height: 36px;
                background: #fff;
                border: none;
                color: #616161;
                padding: 0 20px;
                line-height: 16px;
                width: 100%;
                margin-bottom: 13px;
                outline: 0;
                border-radius: 0px;
                position: relative;
                z-index: 2;
                float: left;
                width: 100%;
                margin-bottom: 0;
            }
        }

        button {
            flex-basis: 80%;
            border-radius: 3px;
            background: #df4662;
            color: #ffffff;
            line-height: 37px;
            padding: 0 10px;
            font-family: 'Interstate';
            font-size: 13px;
            text-transform: uppercase;
            color: #fff;
            text-shadow: 1px 1px 2px rgba(0,0,0,.12);
            border: none;
            border-radius: 0px;
            white-space: nowrap;
            cursor: pointer;

            :hover {
                background: #5ab8b3;
                transition: .4s;
            }

            img {
                vertical-align: middle;
                height: 1.2rem;
                width: 1.6rem;
            }
    }
`;

export const FooterTacoImg = styled.div`
    height: 3rem;
    background-position: left !important;
    background-repeat: no-repeat !important;
`;

export const SuccessLabel = styled.div`
    flex-basis: 100%;
    color: #00CCCC;
    margin: 10px 0px;
    font-family: 'Interstate';

    @media screen and (max-width: 800px) {
        width: 80%
    }
`;

export const ErrorLabel = styled.div`
    flex-basis: 100%;
    margin: 10px 0px;
    font-family: 'Interstate';
    color: #FF3366;

    @media screen and (max-width: 800px) {
        width: 80%
    }
`;

export const FootRight = styled.div`
    flex-basis: 40%;

    h2 {
        text-transform: uppercase;
        color: #616161;
        font-family: 'Interstate';
        margin-bottom: 0px;
        font-weight: 300;
        font-size: 30px;
    }

    h6 {
        margin: 0;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 90%;

        input, textarea {
            height: 36px;
            background: #fff;
            border: none;
            color: #616161;
            padding: 0 20px;
            line-height: 16px;
            width: 100%;
            margin-bottom: 13px;
            outline: 0;
            border-radius: 0px;
            position: relative;
            z-index: 2;
            float: left;
            width: 100%;
            margin-bottom: 0;
            margin: 1rem auto;
        }

        button {
            border-radius: 3px;
            background: #df4662;
            color: #ffffff;
            line-height: 37px;
            padding: 0 10px;
            font-family: 'Interstate';
            font-size: 13px;
            text-transform: uppercase;
            color: #fff;
            text-shadow: 1px 1px 2px rgba(0,0,0,.12);
            border: none;
            border-radius: 0px;
            white-space: nowrap;
            cursor: pointer;
            width: 50%;

            img {
                vertical-align: middle;
                height: 1.2rem;
                width: 1.6rem;
            }

            :hover {
                background: #5ab8b3;
                transition: .4s;
            }
        }
    }

    @media screen and (max-width: 800px) {
        form {
            width: 100%;

            input, textarea {
                width: 80%
            }
        }
    }
`;