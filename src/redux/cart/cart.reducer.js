import cartTypeaction from "./cart.type"

import { addItemToCart } from "./cart.utlis"

const  INITIAL_STATE = {

    hidden:true,
    cartItems:[],
    logInOut:true
}

const cartReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){

        case cartTypeaction.TOGGLE_CART_HIDDEN :
            return{
                ...state,
                hidden: !state.hidden
            }

        case cartTypeaction.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            }   

        case cartTypeaction.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload)
            }    

        case cartTypeaction.LOGINOUT:
            return{
                ...state,
                logInOut:!state.logInOut
            }
            
        default:
            return {
                ...state
            }    

    }

}

export default cartReducer