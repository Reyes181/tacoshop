import styled from 'styled-components';

export const Login = styled.div`
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: normal;
    height: 80vh;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: auto;
    }
`;

export const LoginHeader = styled.div`
    text-align: center;
        
    h6 {
        color: #616161;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 0.8rem;
        margin: 0;
    }
`;

export const LoginContainer = styled.div`
    background: white;
    flex-direction: column;
    flex-basis: 40%;
    padding: 0.5rem 1.5rem 1.5rem 1.5rem;
    align-items: center;
    
    @media screen and (max-width: 800px) {
        flex-basis: 100%;
    }
`;

export const LoginButton = styled.h4`
    margin: 0.5rem 0 0 0;
    cursor: pointer;
    background: #333333;
    padding: 8px 10px;
    color: #ffffff;
    text-transform: capitalize;
    border-radius: 3px;
    cursor: pointer;
    width: 20%;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const LoginBackground = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover !important;
    background-position: ${props => props.position} !important;
    opacity: 0.75;
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    h2 {
        margin: 0;
        padding-bottom: 10%;
        padding-left: 5%;
        color: white;
        font-size: 2.5rem;
        text-transform: capitalize;
    }
`;

export const LoginBackgroundContainer = styled.div`
    flex-basis: 60%;
    background: #74ebd5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ACB6E5, #74ebd5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 800px) {
        display: none;
    }
`;