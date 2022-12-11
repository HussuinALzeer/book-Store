import React, { useEffect, useState } from "react";

import './header.styles.scss'

import CartIcon from "../cart/cart-icon/cart-icon.component";
import DropDown from "../cart/cart-dropdown/dropdown.component";

import {connect} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

const Header = ({hidden}) =>{    

    const nav = useNavigate()
    return(
        <div className="Header">

            <div className="logo" onClick={()=>nav('/')}>
                Header
            </div>

            

            <div className="options">
            <Link to={'/login'} className="option">login</Link>
            <Link to={'/signup'} className="option">Sign up</Link>
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