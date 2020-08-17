import React, {memo} from 'react';
import DashboardItem from './DashboardItem';
import {PurchaseColumn, PurchaseContainer, PurchaseHeaders} from '../../styles/js/user-purchase.styles'

const UserPurchase = (props) => {
    const {item} = props
    
    return (
        <PurchaseContainer>
            <PurchaseHeaders>
                <span>Order: {item.orderNumber}</span>
            </PurchaseHeaders>
            <PurchaseHeaders>
                <span>
                    Shipping: 
                    {item.notZero !== '0' ?
                        (item.notZero === '5' ? ' Ground Shipping' 
                        : 
                            (item.notZero === '17' ? ' UPS 2-Day Air' : 
                                (item.notZero === '37' ? ' UPS Next Day Air' : ' Free Shipping')
                            )
                        )
                    : 
                        ' Free Shipping'
                    }
                </span>
                <span>Order Date: {item.todayDate}</span>
                <span>Order Total: ${item.total}</span>
            </PurchaseHeaders>
            <PurchaseColumn>
                {item.cartItems.map((item, i) => (
                    <DashboardItem key={i} item={item}/>
                ))}
            </PurchaseColumn>
        </PurchaseContainer>
    )
}


export default memo(UserPurchase);