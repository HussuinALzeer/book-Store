import React from "react";

import {connect} from 'react-redux'

import {ReactComponent as ShopingIcon} from '../../../asset/bag.svg'
import { toggleHidde } from "../../../redux/cart/cart.action";


import './cart-icon.styles.scss'

const CartIcon = ({toggleHidde}) =>{
    return(
        <div className="cart-icon" onClick={toggleHidde}>
            <ShopingIcon className="shopping-icon"   />
            <span className="item-count">10</span>
        </div>
    )
}

const mapdispatchToProps = (dispatch) =>({
    toggleHidde : () => dispatch(toggleHidde())

})

export default connect(null,mapdispatchToProps)(CartIcon);