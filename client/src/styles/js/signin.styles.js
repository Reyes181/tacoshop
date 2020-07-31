import styled from 'styled-components';

export const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;


    @media screen and (max-width: 800px) {
        flex-basis: 100%;

        h3 {
            text-align: center;
        }

        form {
            margin: 0 auto;
        }
    }
`;

export const CreateForm = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 18rem;

    span {
        cursor: pointer;
    }

    h4 {
        margin: 5px 0px;
    }

    @media screen and (max-width: 800px) {
        margin: 0 auto;
        height: auto;
        flex-direction: column;
    }
`;

export const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 45%;
    margin: 0.8rem;

    label {
        display: block;
        font-weight: bold;
        font-size: 13px;
        margin-bottom: 5px;
    }
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 18rem;

    label {
        display: block;
        font-weight: bold;
        font-size: 13px;
        margin-bottom: 5px;
    }

    span {
        cursor: pointer;
    }

    h4 {
        margin: 5px 0px;
    }

    @media screen and (max-width: 800px) {
        margin: 0 auto;
        height: auto;
    }
`;

export const SigninInput = styled.input`
    width: initial;
    font-family: "Geometric 415";
    font-size: 13px;
    color: #000000;
    border: 1px solid #f0f0f0;
    height: 50px;
    margin: 0px;
    margin-bottom: 20px;
    max-width: 100%;
    text-indent: 10px;
    outline: none;
`;

export const SigninSubmit = styled.button`
    width: 100%;
    max-width: 100%;
    background: #5cb8b2;
    color: #ffffff;
    font-family: "Geometric 415";
    border: none;
    display: inline-block;
    font-size: 13px;
    font-weight: normal;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 15px;
    line-height: normal;
    height: 50px;
    letter-spacing: 1px;
    margin-top: 15px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const GoogleIconBox = styled.div`
    width: 30px;
    height: 30px;
    background-size: contain !important;
    background-repeat: no-repeat !important;
`;

export const GoogleContent = styled.div`
    flex-basis: 50%
`;