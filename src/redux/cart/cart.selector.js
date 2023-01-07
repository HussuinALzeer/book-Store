import { createSelector } from "reselect";


const selectCart = state => state.cartReducer

export const selectCartItem = createSelector (
    [selectCart],
    item =>item.cartItems
)

export const selectlogInOut = createSelector(
    [selectCart],
    item => item.logInOut
)

export const selectHidden = createSelector(
    [selectCart],
    item => item.hidden
)


export const selectCartTotal = createSelector (
    [selectCartItem],
    cartItems => 
        cartItems.reduce((accumalatedQunatity , cartItem) =>
            accumalatedQunatity  + cartItem.quantity * cartItem.price,
            0    
        )
)

export const selectCartItemsCount = createSelector(
    [selectCartItem],
    cartItems => 
        cartItems.reduce((accumalatedQunatity , cartItem) =>
            accumalatedQunatity  + cartItem.quantity,
            0    
        )
    
)