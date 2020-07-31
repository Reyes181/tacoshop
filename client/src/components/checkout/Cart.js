import React, {memo} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';


import {CartIcon, ItemCount, RedirectLogin, RedirectButton} from '../../styles/js/cart.styles';
import {ReactComponent as ShoppingIcon} from '../../assets/images/cart.svg';

import CartItem from './CartItem';
import Button from '../Button';

const Cart = ({cartItems, itemCount, history, currentUser}) => {
    const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles({
        root: {
          overflowY: 'initial'
        }
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCheckout = () => {
        history.push('/checkout');
        handleClose()
    }

    const classes = useStyles();
    return (
        <CartIcon>
            <ShoppingIcon onClick={handleClickOpen}/>
            <ItemCount>{itemCount}</ItemCount>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='md'
                fullWidth={true}
            >
                {
                    cartItems.length !== 0 ?
                    <>
                    <DialogContent style={{display: 'flex', justifyContent: 'space-between'}} classes={{root: classes.root}}>
                        <DialogTitle>
                            My Cart
                        </DialogTitle>
                        <IconButton aria-label="close"  onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                        
                    </DialogContent>
                    
                    <DialogContent classes={{root: classes.root}}>
                        {cartItems.map((item, i) => (
                            <CartItem item={item} key={i}/>
                        ))}
                    </DialogContent>
                    <DialogContent style={{height: '10rem'}} classes={{root: classes.root}}>
                        {currentUser ?
                            <Button onClick={handleCheckout} isCheckout>Checkout</Button>
                        :
                            <RedirectLogin>
                                <p>Login or create an account to checkout</p>
                                <RedirectButton onClick={handleClose} to='/checkout'>Go to Login / Create Account</RedirectButton>
                            </RedirectLogin>
                        }
                    </DialogContent>
                    </>
                    : 
                    <p style={{textAlign: 'center'}}>Your cart is currently empty.</p>
                }
                
            </Dialog>
        </CartIcon>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    itemCount: selectCartItemsCount,
    currentUser: selectCurrentUser
})

export default withRouter(connect(mapStateToProps)(memo(Cart)));