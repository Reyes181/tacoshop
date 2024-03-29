import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import TacoBrand from '../../assets/images/taco_circle.jpg';


const StripeCheckoutButton = ({price, handlePaid, purchaseResult}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DY7JAvpbGUf5IRqRAd5Z8SCX00kdmpcJEi';

    const onToken = (token) => {
        
        axios({
            url: '/payment',
            credentials: 'include',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            handlePaid(true);
            purchaseResult(true);
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            purchaseResult(false)
        })
    }
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='Taco Shop'
            billingAddress
            shippingAddress
            image={`${TacoBrand}`}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default  StripeCheckoutButton;