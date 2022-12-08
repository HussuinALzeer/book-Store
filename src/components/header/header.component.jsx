import React, { useEffect, useState } from "react";

import './header.styles.scss'

import CartIcon from "../cart/cart-icon/cart-icon.component";
import DropDown from "../cart/cart-dropdown/dropdown.component";

import {connect} from 'react-redux'

const Header = ({hidden}) =>{    

    return(
        <div className="Header">

            <div className="logo">
                Header
            </div>

            <div className="search" >
                <div className="search-con " >
                    <input type="text" placeholder="Search" />
                    <div className="icon-s"></div>
                </div>
            </div>

            <div className="options">
                <div className="option">Shop</div>
                <div className="option">
                <CartIcon></CartIcon>    
                </div>    
            </div>    
            {
                hidden? null:
                <DropDown></DropDown>
            }
        </div>
    )
}

const mapstateToProps= ({cartReducer:{hidden}}) =>({
    hidden
})
export default connect(mapstateToProps)(Header)