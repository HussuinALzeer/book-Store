import cartTypeaction from "./cart.type";

export const toggleHidde = () => ({
    type:cartTypeaction.TOGGLE_CART_HIDDEN
})

export const addItem = (item) =>({
    type:cartTypeaction.ADD_ITEM,
    payload:item
})