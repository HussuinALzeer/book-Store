import React, { useEffect, useState } from "react";

import './header.styles.scss'

import CartIcon from "../cart/cart-icon/cart-icon.component";
import DropDown from "../cart/cart-dropdown/dropdown.component";

import {connect} from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

import { selectlogInOut } from "../../redux/cart/cart.selector";
import { selectHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { SignOut } from "../../firebase";
import { changeLoginTitle } from "../../redux/cart/cart.action";

const Header = ({selectHidden,selectlogInOut,changeLoginTitle}) =>{    

    window.addEventListener('scroll',function(){
        const header = document.getElementById('header');

        header.classList.toggle("sticky",window.scrollY > 0)

    })

    

    const singOut = () =>{
        SignOut()
        changeLoginTitle()
    }

    const nav = useNavigate();

    return(
        <div className="Header" id="header">

            <div className="logo" onClick={()=>nav('/')}>
                Header
            </div>

            

            <div className="options">
            
            {
                selectlogInOut?
                <Link to={'/login'} className="option">login</Link>:
                <div onClick={()=> singOut()} className="option">sign out</div>
            }    
            

            {/* <Link to={'/signup'} className="option">Sign up</Link> */}

                <div className="option">
                <CartIcon></CartIcon>    
                </div>    
                
            </div>    
            {
                selectHidden? null:
                <DropDown></DropDown>
            }
        </div>
    )
}

const mapstateToProps =  createStructuredSelector({
    selectHidden,
    selectlogInOut
})

const mapdispatchToProps = dispatch =>({
    changeLoginTitle:() => dispatch(changeLoginTitle())
})

export default connect(mapstateToProps,mapdispatchToProps)(Header)