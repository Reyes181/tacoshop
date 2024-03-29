import React, {useEffect, useState, memo} from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { v4 as uuidv4 } from 'uuid';

import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selectors';
import {clearCart} from '../../redux/cart/cart.action';
import {selectCurrentUser, selectUserVerified} from '../../redux/user/user.selectors';
import {purchaseHistoryStart, sendPurchaseEmailStart} from '../../redux/shop/shop.action';
import {userVerified} from '../../redux/user/user.action';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


import CartItem from './CartItem';
import Button from '../Button';
import StripeCheckoutButton from '../stripe-button/StripeButton';

import {CheckoutContainer, CheckoutAlert, CheckoutCouponContainer, CheckoutOldPrice, CheckoutOrder, CheckoutTotalContainer,
    CheckoutOrderContainer, CheckoutOrderHeader, CheckoutPrice, CheckoutShippingBox, CheckoutTotalBox, CheckoutTotalPrice,
    VerifiedLink, VerifiedMessage
} from '../../styles/js/checkout.styles';


const CheckoutPage = ({cartItems, subtotal, clearCart, purchaseHistoryStart, currentUser, userVerified, userIsVerified, history, sendPurchaseEmailStart}) => {
    const [total, setTotal] = useState(subtotal);
    const [notZero, setNotZero] = useState('0')
    const [coupon, setCoupon] = useState('');
    const [open, setOpen] = useState(false);
    const [resultMessage, setResultMessage] = useState({color: '', message: '', title: ''})
    const [noCoupon, setNoCoupon] = useState(false);
    const [shipping, setShipping] = useState(total);
    const [applied, setApplied] = useState(false);
    const [paid, setPaid] = useState(false);
    const [verified, setVerified] = useState({message: '', verified: false});

    useEffect(() => {
        document.title = 'Checkout - Taco Shop';
        userVerified();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(() => {
        setVerified(userIsVerified !== undefined && userIsVerified[0])
    }, [userIsVerified]);

    useEffect(() => {
        if(total !== subtotal){
            setTotal(subtotal);
            setShipping(subtotal);
            setApplied(false);
        }
    }, [total, subtotal])

    const handleInput = (e) => {
        e.preventDefault();
        setCoupon(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(coupon === "REACT"){
            setApplied(true);
            setCoupon('');
            setNoCoupon(false);
        } else {
            setNoCoupon(true);
        }
        
    }

    const handleChange = (event) => {
        setNotZero(event.target.value)
        if(shipping === total){
            let newTotal = total + parseInt(event.target.value);
            setShipping(newTotal);
        }
        let newTotal = total + parseInt(event.target.value);
        setShipping(newTotal);
    };
    
    const handlePaid = async (payment) => {
        setPaid(payment);
        const userId = currentUser.id;
        const collectionKey = 'userProfile';
        let todayDate = moment().format("YYYY-MM-DD");
        let orderNumber = uuidv4(); 
        let to = currentUser.email;
        let name = currentUser.displayName;
        let token = currentUser.id;
        let transactiondata = {cartItems, total, todayDate, orderNumber};
        let type = 'purchase';
        let data = {to, name, token, transactiondata, type};
        const purchaseHistory = {cartItems, total, notZero, todayDate, orderNumber};
        await purchaseHistoryStart({collectionKey, userId, purchaseHistory, currentUser});
        await sendPurchaseEmailStart(data);

        clearCart();
        // setTimeout(() => {
        //     history.push('/account/dashboard');    
        //  }, 5000)
        
    } 

    const purchaseResult = (bool) => {
        if(bool){
            let newMessage = {color: 'success', message: 'Payment was Successful', title: 'Confirmed!'}
            setResultMessage(newMessage)
            setOpen(true)
            setTimeout(() => {
                history.push('/account/dashboard');    
            }, 5000)
        } else {
            let newMessage = {color: 'warning', message: 'There was an issue with your payment. Please use the provided test card.', title: 'Warning'}
            setResultMessage(newMessage)
            setOpen(true)
        }
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <CheckoutContainer>
            <CheckoutOrder>
                <Accordion defaultExpanded={true} expanded={true}>
                    <AccordionSummary>
                        <ShoppingCartIcon style={{fill: '#449d97'}}/>
                        <CheckoutOrderHeader>
                            <p style={{color: '#449d97'}}>Order summary</p>
                            <p id='card'>*For testing payment use the following card: 4242 4242 4242 4242 - Exp: 01/24 - CVV: 123</p>
                            <p>${Number.parseFloat(shipping).toFixed(2)}</p>
                        </CheckoutOrderHeader>
                        
                    </AccordionSummary>

                    <AccordionDetails>
                        <CheckoutOrderContainer>
                            {paid ? 
                                <>
                                    <div>Cart is empty</div>
                                </> 
                                : 
                                <>
                                    {cartItems.map((item, i) => (
                                        <CartItem item={item} key={i}/>
                                    ))}
                                </>
                            }
                            
                        </CheckoutOrderContainer>
                    </AccordionDetails>
                    
                    <AccordionDetails>
                        <CheckoutCouponContainer>
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder='Discount Code' value={coupon} onChange={handleInput}/>
                                <Button type='submit' disabled={applied}>Apply</Button>
                            </form>
                            {applied ? 
                               <CheckoutAlert>
                                   <span>Discount 'REACT' for 25% off applied to final price</span>
                               </CheckoutAlert> 
                               :
                               null
                            }
                            {noCoupon ?
                                <CheckoutAlert>
                                    <span style={{color: '#FF3366'}}>Not a valid coupon</span>
                                </CheckoutAlert> 
                                :
                                null
                            }
                            
                        </CheckoutCouponContainer>
                    </AccordionDetails>
                    <hr/>
                    <AccordionDetails>
                        <CheckoutTotalContainer>
                            <CheckoutTotalBox>
                                <p>Subtotal</p>
                                {applied ?
                                    <div style={{display: 'flex'}}>
                                        <CheckoutOldPrice>${Number.parseFloat(subtotal).toFixed(2)}</CheckoutOldPrice>
                                        <CheckoutPrice>${Number.parseFloat(total - (total * 0.25)).toFixed(2)}</CheckoutPrice>   
                                    </div>
                                    :
                                    <CheckoutPrice>${Number.parseFloat(subtotal).toFixed(2)}</CheckoutPrice>
                                }
                                
                            </CheckoutTotalBox>
                            <CheckoutShippingBox>
                                {subtotal < 50 ?
                                    <>
                                        <p>Shipping</p>
                                        <select name="shipping" id="shipping" onChange={handleChange}>
                                            <option value={'0'}>Select shipping rate</option>
                                            <option value={'5'}>Ground Shipping: $5</option>
                                            <option value={'17'}>UPS 2-Day Air: $17</option>
                                            <option value={'37'}>UPS Next Day Air: $37</option>
                                        </select>
                                    </>
                                    :
                                    <p>Free Shipping</p>
                                }
                                
                            </CheckoutShippingBox>
                            <hr/>
                            <CheckoutTotalBox>
                                <p>Total</p>
                                <CheckoutTotalPrice>USD ${Number.parseFloat((applied ? shipping - total * 0.25 : shipping)).toFixed(2)}</CheckoutTotalPrice>
                            </CheckoutTotalBox>
                            {!verified ? 
                                <>
                                    <VerifiedMessage>
                                        Email account must be verified to complete purchase. 
                                    </VerifiedMessage>
                                    <VerifiedLink to='/account/dashboard'>Request a verfication link from your dashboard.</VerifiedLink>
                                </>
                            :
                            <>
                                {notZero !== '0' || subtotal > 49 ? <StripeCheckoutButton price={shipping} handlePaid={handlePaid} purchaseResult={purchaseResult}/> : <></> }
                            </>
                            }
                            
                            
                        </CheckoutTotalContainer>
                    </AccordionDetails>
                </Accordion>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth='md'
                >
                    <DialogContent>
                        <DialogContentText>
                            {resultMessage.message}
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

            </CheckoutOrder>
        </CheckoutContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(clearCart()),
    purchaseHistoryStart: purchaseCrendential => dispatch(purchaseHistoryStart(purchaseCrendential)),
    sendPurchaseEmailStart: data => dispatch(sendPurchaseEmailStart(data)),
    userVerified: () => dispatch(userVerified())
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    subtotal: selectCartItemsTotal,
    currentUser: selectCurrentUser,
    userIsVerified: selectUserVerified
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(CheckoutPage));