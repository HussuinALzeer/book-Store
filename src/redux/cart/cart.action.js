import cartTypeaction from "./cart.type";

export const toggleHidde = () => ({
    type:cartTypeaction.TOGGLE_CART_HIDDEN
})

export const addItem = (item) =>({
    type:cartTypeaction.ADD_ITEM,
    payload:item
})

export const clearItemFromCart = item =>({
    type :cartTypeaction.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const changeLoginTitle = () =>({
    type : cartTypeaction.LOGINOUT,
})