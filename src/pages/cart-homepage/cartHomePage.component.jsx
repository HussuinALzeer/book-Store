import React from "react";
import './cartHomePage.styles.scss'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItem } from "../../redux/cart/cart.selector";

import { clearItemFromCart } from "../../redux/cart/cart.action";
import StripeCheckoutButton from "../../components/stripButton/sButton.component";

import { selectCartTotal } from "../../redux/cart/cart.selector";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";
class CartHomePage extends React.Component {

    

    render(){

        const {selectCartItem} = this.props
        const {clearItemFromCart,selectCartTotal} = this.props
        console.log(selectCartTotal);
        return(
            <div className="body">
                <div className="Cart-Container">
                
                <div className="HeaderC">
                    <h3 className="HeadingC">Shopping Cart</h3>
                </div>
                    
                <div className="con-Cart-Items">

                    {selectCartItem.map(item => (

                        <div className="Cart-Items" key={item.id}>
                            <div className="image-box">
                             <img className="imgC" src={item.img}/>
                            </div>
                            <div className="about">
                            <h1 className="title">{item.name}</h1>
                            <h3 className="subtitle">{item.author}</h3>
                            
                            </div>
                            <div className="counter"></div>
                            <div className="prices">
                                <div className="amount">$ {item.price}.00</div>
                                <div className="btn" onClick={() => clearItemFromCart(item.id)}><u>Remove</u></div>
                            </div>
                    </div>  
                    ))}

                     

                    
                </div>

                 <hr /> 
                <div className="checkout">
                        <div className="total">

                        <div>
                            
                        </div>
                        <div className="total-amount">
                            <div className="total-amount">${selectCartTotal}.00</div>
                            <StripeCheckoutButton price={selectCartTotal} className="btn"></StripeCheckoutButton>
                        </div>
                        </div>

                </div>

                </div> 

            </div>
            
            )
    }
}

const mapStateToProps = createStructuredSelector({
    selectCartItem,
    selectCartTotal,
    selectCartItemsCount
})

const mapdispatchToProps= dispatch =>({
    clearItemFromCart : item => dispatch(clearItemFromCart(item))
})

export default connect(mapStateToProps,mapdispatchToProps)(CartHomePage)