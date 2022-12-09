import React from "react";
import './drop.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import { connect } from "react-redux";

const DropDown= ({cartItems}) =>{

    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                  cartItems.map(item =>(
                    <CartItem key={item.id} item={item}></CartItem>
                  ))
                }
            </div>
            <div className="con">
            <div className="liq-con">
                <span>Check out</span>
                <div className="liquid"></div>
            </div>
            </div>
        </div>
    )
}

    const mapStateToProps = ({cartReducer : {cartItems}}) => ({
        cartItems
    })


export default connect(mapStateToProps)(DropDown);