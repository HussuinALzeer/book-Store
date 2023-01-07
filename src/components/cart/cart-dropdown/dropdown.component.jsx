import React from "react";
import './drop.styles.scss'
import {ReactComponent as Logo} from '../../../asset/rain.svg'

import CartItem from '../cart-item/cart-item.component'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { toggleHidde } from "../../../redux/cart/cart.action";

const DropDown= ({cartItems,toggleHidde}) =>{

    return(
        <div className="cart-dropdown">

            <div className="cart-items">
                {
                    cartItems.length ?
                  cartItems.map(item =>(
                    <CartItem key={item.id} item={item}></CartItem>
                  ))
                  
                  :<Logo></Logo>
                }
            </div>
            <div className="con">
                <div className="liq-con">
                   <Link className="link" onClick={()=>toggleHidde()}  to={'/cart'}>Check out</Link>
                   <div className="liquid"></div>
                </div>
            </div>
            
        </div>
    )
}

    const mapStateToProps = ({cartReducer : {cartItems}}) => ({
        cartItems
    })

    const mapDispatchToProps = dispatch =>({
        toggleHidde:()=> dispatch(toggleHidde())
    })


export default connect(mapStateToProps,mapDispatchToProps)(DropDown);