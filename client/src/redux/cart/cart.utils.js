export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingCartItem = cartItems.find(
        cartItem => cartItem[0].item.id === cartItemToAdd[0].item.id
    );

    const existingCartItemSize = cartItems.find(
        cartItem => cartItem[0].size === cartItemToAdd[0].size
    )

    if(existingCartItem) {
        if(existingCartItemSize) {
            return cartItems.map(cartItem => 
                cartItem[0].item.id === cartItemToAdd[0].item.id && cartItem[0].size === cartItemToAdd[0].size
                ? {...cartItem, quantity: cartItem.quantity + 1} 
                : cartItem
            )
        }
        
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem[0].item.id === cartItemToRemove[0].item.id
    );

    const existingCartItemSize = cartItems.find(
        cartItem => cartItem[0].size === cartItemToRemove[0].size
    );

    if(existingCartItem) {
        if(existingCartItemSize.quantity === 1) {
            return cartItems.filter(
                cartItem => cartItem[0].item.id !== cartItemToRemove[0].item.id || cartItem[0].size !== cartItemToRemove[0].size
            )
        }
        
    }

    return cartItems.map(cartItem =>
        cartItem[0].item.id === cartItemToRemove[0].item.id && cartItem[0].size === cartItemToRemove[0].size ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem   
    )
}