import React from "react";

import './cart-item.styles.scss'


const CartItem=({item: {imageUrl,price,title}})=>{

    return(
        <div className="cart-item">
            <img src="https://picsum.photos/200/300" alt="" />
            <div className="item-details">
            <span className="name">{title}</span>
            <span className="name">$3</span>
            </div>
        </div>
    )
}


export default CartItem