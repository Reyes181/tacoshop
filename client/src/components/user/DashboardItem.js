import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import {CartItemAttr, CartItemContainer, CartItemDesc, CartItemImage, CartItemImageBox,
    CartItemPrice, CartItemQuantity} from '../../styles/js/cartitem.styles';


const DashboardItem = (props) => {
    const {quantity} = props.item
    const {item} = props
    
    return (
        <CartItemContainer>
            <CartItemImageBox>
                <CartItemImage style={{background: `url(${item[0].item.imageUrl})`}}/>
            </CartItemImageBox>
            
            <CartItemDesc>
                <Link  key={item[0].item.id} to={{pathname: `/shop/${item[0].item.name}`, state:{product: item[0].item, collection: item[0].collection}}}>
                     <p>{item[0].item.name}</p>
                </Link>
                
                <CartItemAttr>
                    <div style={{background: `${item[0].item.color}`}}/>
                    <p>{item[0].size !== null ? <span>/ {item[0].size}</span> : <span>no size</span>}</p>
                </CartItemAttr>
                 
            </CartItemDesc>
            <CartItemPrice>
                <div>
                    Quantity
                    <CartItemQuantity>
                        <p>{quantity}</p>
                    </CartItemQuantity>
                </div>
                <div>
                    Price
                    <p>${Number.parseFloat(item[0].item.price).toFixed(2)}</p>
                </div>
            </CartItemPrice>
            <hr/>
        </CartItemContainer>
    )
}


export default memo(DashboardItem);