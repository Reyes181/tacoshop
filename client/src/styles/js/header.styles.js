import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MainHeader = styled.header`
    height: 110px;
    background: #ffffff;
    padding: 5px 0;
    position: relative;
    z-index: 201;
    transition: .4s;
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;

    @media screen and (max-width: 800px) {
        width: 100%
    }
`;

export const Nav = styled.nav`
    border: medium none;
    background: transparent;
    border-radius: 0;
    font-family: 'InterstateCondensed-Black', sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 0;
    min-height: 0px;
`;

export const HeaderContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    width: 1170px;
    padding: 0px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

export const HeaderItemsContent = styled.div`
    @media screen and (max-width: 800px) {
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
    }
`;

export const HeaderBrand = styled(Link)`
    float: left;
    padding: 0;
    height: auto;
    font-size: 18px;
    line-height: 20px;
    margin-left: 0px;

    img {
        display: block;
        max-width: 100%;
        height: auto;
        transition: .4s;
        border: none !important;
        padding: 10px 0;
    }

    @media screen and (max-width: 800px) {
        flex-basis: 35%;

        img {
            width: 80%;
            margin-left: 1rem;
        }
    }
`;

export const HeaderButtonContainer = styled.div`
    right: 9%;
    top: 25px;
    float: right;
    display: flex;

    div {
        margin-left: 10px;
        margin-top: 1rem;
    }

    @media screen and (max-width: 800px) {
        flex-basis: 65%;
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-around;
    }
`;

export const HeaderButton = styled(Link)`
    background: #333333;
    padding: 8px 10px;
    color: #ffffff;
    text-transform: capitalize;
    border-radius: 3px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        padding: 10px 12px;
    }
`;

export const HeaderNavContainer = styled.div`
    padding: 0px;
    border-color: #e7e7e7;
    display: block;
    height: auto;
    overflow: visible;
    float: left;
    width: 100%;
    text-align: left;
    border-top: 0;
    box-shadow: none;
    font-family: 'Interstate';

    @media screen and (max-width: 800px) {
        width: auto;
    }
`;

export const HeaderNavUl = styled.ul`
    min-height: 25px;
    text-align: center;
    margin: 5px auto !important;
    float: none;
    padding: 0;
    list-style: none;

    li {
        padding-left: 0;
        position: static;
        float: none;
        display: inline-block;
        margin: 0;
        list-style: none;
        padding: 0px 11px;
        border-right: 0px solid #cc11cc;

        a {
            position: static;
            font-size: 1rem;
            margin: 0 0px;
            color: #000000;
            padding: 0;
            z-index: 0;
            line-height: 20px;
            display: block;
            cursor: pointer;

            :hover {
                transform: scale(1.2);
                border-bottom: 2px solid rgb(22, 212, 187);
            }
        }
    }

    @media screen and (max-width: 800px) {
        li {
            a {
                :hover {
                    transform: scale(0)
                    border-bottom: 1px solid rgb(22, 212, 187)
                }
            }
        }
    }
`;