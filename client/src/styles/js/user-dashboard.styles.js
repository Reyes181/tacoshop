import styled from 'styled-components';

export const UserInfoPanel = styled.div`
    background: #f8f8f8;
    padding: 20px;
    margin-top: 20px;

    h1 {
        margin: 0 0 20px 0;
        line-height: 32px;
        text-transform: uppercase;
        font-size: 25px;
    }
`;

export const UserInfoContent = styled.div`
    span {
        display: block;
        font-size: 18px;
        font-weight: 300;
    }
    margin-bottom: 2rem;
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 1rem 0;

    @media screen and (max-width: 800px) {
        width: 50%;
    }
`;

export const MessageContent = styled.div`
    padding: 0.5rem 0;
    font-family: 'Josefin Sans';
    font-weight: 700;
    color: #FF033E;
    font-size: 1.2rem;
`;

export const UserProfileContainer = styled.div`
    width: 80%;

    form {
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 800px) {
        width: 100%;

        h3 {
            text-align: center;
        }

        form {
            margin: 0 auto;
            width: 100%;
        }
    }
`;

export const UserProfileInput = styled.input`
    width: initial;
    font-size: 1.2rem;
    color: #000000;
    border: 1px solid #f0f0f0;
    height: 50px;
    margin: 0px;
    margin-bottom: 20px;
    max-width: 100%;
    text-indent: 10px;
    outline: none;
`;