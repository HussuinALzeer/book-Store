import React from "react";
import './drop.styles.scss'



const DropDown= () =>{

    return(
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <div className="con">
            <div className="liq-con">
                <span>Check out</span>
                <div className="liquid"></div>
            </div>
            </div>
        </div>
    )
}



export default DropDown;