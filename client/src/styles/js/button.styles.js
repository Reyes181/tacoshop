import styled, {css} from 'styled-components';

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`;

const checkoutStyles = css`
    width: 10%;
    float: right;

    @media screen and (max-width: 800px) {
        width: 100%;
        float: none;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogle){
        return googleSignInStyles;
    }

    return props.isCheckout ? checkoutStyles : ''
}

export const CustomButton = styled.button`
    width: 100%;
    max-width: 100%;
    background: #5cb8b2;
    color: #ffffff;
    font-family: 'Interstate';
    border: none;
    display: inline-block;
    font-size: 1.1rem;
    font-weight: normal;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 15px;
    line-height: normal;
    height: 50px;
    letter-spacing: 1px;
    margin-top: 15px;

    &:focus {
        outline: 0;
    }

    &:hover {
        background-color: #70e6de;
        border: none;
    }

    ${getButtonStyles}
`;