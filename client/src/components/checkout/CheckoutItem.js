import React, {memo} from 'react';
import {CartItemAttr, CartItemContainer, CartItemDesc, CartItemImage, CartItemPrice} from '../../styles/js/cartitem.styles';

const CheckoutItem = (props) => {
    
    
    return (
        <CartItemContainer>
            <CartItemImage style={{background: `url(${props.item[0].item.imageUrl})`}}/>
            <CartItemDesc>
                <p>{props.item[0].item.name}</p>
                <CartItemAttr>
                    <div style={{background: `${props.item[0].item.color}`}}/>
                    <p>{props.item[0].size !== null ? <span>/ {props.item[0].size}</span> : <span>no size</span>}</p>
                </CartItemAttr>
                 
            </CartItemDesc>
            <CartItemPrice>
                <p>{props.item.quantity}</p>
                <p>${Number.parseFloat(props.item[0].item.price).toFixed(2)}</p>
            </CartItemPrice>
        </CartItemContainer>
    )
}


export default memo(CheckoutItem);