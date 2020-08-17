import styled from 'styled-components';

export const PurchaseContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    border-bottom: 1px solid;
`;

export const PurchaseHeaders = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 1rem;
    font-family: 'Interstate';

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const PurchaseColumn = styled.div`
    display: flex;
    flex-direction: column;
`;