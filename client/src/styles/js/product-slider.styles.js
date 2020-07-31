import styled from 'styled-components';

export const PrevArrows = styled.div`
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 3px;
    background: #dddddd;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border: none;
    font-size: 0px;
    position: absolute;
    top: 50%;
    margin-top: -80px;
    left: -40px;
    transition: .4s;
    opacity: 0;
    visibility: hidden;

    &::after {
        content: "<";
        font-family: 'BrandonBold';
        font-size: 10px;
    }

    &:hover {
        background: #333333;
        transition: .4s;
        cursor: pointer;
    }
`;

export const NextArrows = styled.div`
    display: block;
    width: 28px;
    height: 28px;
    border-radius: 3px;
    background: #dddddd;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border: none;
    font-size: 0px;
    position: absolute;
    top: 50%;
    margin-top: -80px;
    right: -40px;
    transition: .4s;
    opacity: 0;
    visibility: hidden;

    &::after {
        content: ">";
        font-family: 'BrandonBold';
        font-size: 10px;
    }

    &:hover {
        background: #333333;
        transition: .4s;
        cursor: pointer;
    }
`;

export const ProductSliderContainer = styled.div`
    &:hover ${PrevArrows} {
        left: -0px;
        opacity: 1;
        visibility: visible;
        z-index: 99;
    }

    &:hover ${NextArrows} {
        right: -0px;
        opacity: 1;
        visibility: visible;
        z-index: 99;
    }

    @media screen and (max-width: 800px) {
        ${PrevArrows} {
            left: -0px;
            opacity: 1;
            visibility: visible;
            z-index: 99;
        }

        ${NextArrows} {
            right: -0px;
            opacity: 1;
            visibility: visible;
            z-index: 99;
        }
    }
`;