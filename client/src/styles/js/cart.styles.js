import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const CartIcon = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 0 !important;

    svg {
        width: 24px;
        height: 24px;
    }

    @media screen and (max-width: 800px) {
        svg {
            width: 34px;
            height: 34px;
        }
    }
`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;

    @media screen and (max-width: 800px) {
        font-size: 12px;
    }
`;

export const RedirectButton = styled(Link)`
    float: right;
    cursor: pointer;
    background: #df4662;
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-family: 'Interstate';
`

export const RedirectLogin = styled.div`
    flex-direction: column;
    align-items: flex-end;
    display: flex;

    p {
        float: right;
        font-weight: 600;
    }

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`