import React from "react";

import {connect} from 'react-redux'

import {ReactComponent as ShopingIcon} from '../../../asset/bag.svg'
import { toggleHidde } from "../../../redux/cart/cart.action";


import './cart-icon.styles.scss'

const CartIcon = ({toggleHidde,itemCount}) =>{
    return(
        <div className="cart-icon" onClick={toggleHidde}>
            <ShopingIcon className="shopping-icon"   />
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = ({cartReducer : {cartItems}} ) => ({
    itemCount : cartItems.reduce((accumalatedQunatity , cartItem) =>
    accumalatedQunatity  + Number(cartItem.quantity)  ,
    0)    
})

const mapdispatchToProps = (dispatch) =>({
    toggleHidde : () => dispatch(toggleHidde()),

})

export default connect(mapStateToProps,mapdispatchToProps)(CartIcon);