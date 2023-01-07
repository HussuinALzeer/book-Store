import React from "react";

import './cart-item.styles.scss'


const CartItem=({item: {img,price,name},...otherProps})=>{

    console.log(otherProps);
    return(
        <div className="cart-item">
            <img src={img} alt="" />
            <div className="item-details">
            <span className="name">{name}</span>
            </div>
        </div>
    )
}


export default CartItem