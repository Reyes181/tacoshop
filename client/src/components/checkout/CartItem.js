import React, {memo} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.action';
import {CartItemAttr, CartItemContainer, CartItemDesc, CartItemImage, CartItemImageBox,
    CartItemPrice, CartItemQuantity, CartRemovebutton} from '../../styles/js/cartitem.styles';


const CartItem = ({item, clearItem, addItem, removeItem}) => {
    
    return (
        <CartItemContainer id='checkoutQurieContainer'>
            <CartItemImageBox id='checkoutQurieImg'>
                <CartItemImage style={{background: `url(${item[0].item.imageUrl})`}}/>
            </CartItemImageBox>
            
            <CartItemDesc>
                <Link  
                    key={item[0].item.id} 
                    to={{pathname: `/shop/${item[0].item.name}`, state:{product: item[0].item, collection: item[0].collection}}}
                >
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
                        <span onClick={() => removeItem(item)}>&#10094;</span>
                        <p>{item.quantity}</p>
                        <span onClick={() => addItem(item)}>&#10095;</span>
                    </CartItemQuantity>
                </div>
                <div>
                    Price
                    <p>${Number.parseFloat(item[0].item.price).toFixed(2)}</p>
                </div>
                <CartRemovebutton onClick={() => clearItem(item)}>
                    &#10005;
                </CartRemovebutton>
            </CartItemPrice>
            <hr/>
        </CartItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(memo(CartItem));