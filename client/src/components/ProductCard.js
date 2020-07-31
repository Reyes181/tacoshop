import React from 'react';
import {ProductCardContainer, ProductCardBox, ProductCardImg, ProductCardDetails} from '../styles/js/product-card.styles';


const ProductCard = ({imageUrl, name, price, color}) => {
    
    return (
        <ProductCardContainer>
            <ProductCardBox>
                <ProductCardImg style={{background: `url(${imageUrl})`}}/>
            </ProductCardBox>
            <ProductCardDetails>
                <p>{name}</p>
                <p>{Number.parseFloat(price).toFixed(2)}</p>
                <div style={{background: `${color}`}}></div>
            </ProductCardDetails>
        </ProductCardContainer>    
    );
};

export default ProductCard;