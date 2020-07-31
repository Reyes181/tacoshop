import styled from 'styled-components';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;

    label {
        flex-basis: 90%;
        text-align: end;
        padding-right: 0.2rem;
        font-weight: 700;
    }

    ul {
        flex-basis: 10%;
        display: flex;
        justify-content: space-around;
        padding: 0;
        list-style: none;
        margin: 0.5rem 0 1em 0;

        button {
            display: inline-block;
            zoom: 1;
            padding: 0;
            background-color: #fff;
            margin: 0px 3px 10px;
            cursor: pointer;
            border: 1px solid #eee;
            position: relative;
            text-transform: uppercase;
            font-size: 13px;
            font-weight: 700;
            min-width: 44px !important;
            height: 34px !important;
            line-height: 34px;
            white-space: nowrap;
            text-transform: uppercase;
            text-align: center;

            &:focus {
                background-color: #0c0c0c !important; 
                border: 1px solid #0c0c0c !important; 
                color: #fff !important;
                outline: 0;
            }
        }
    }

    @media screen and (max-width: 800px) {
        justify-content: center;

        label {
            text-align: center;
        }
    }
`;