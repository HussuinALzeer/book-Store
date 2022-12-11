
import './content.styles.scss'

import { connect } from "react-redux";

import { addItem } from "../../../redux/cart/cart.action";
import { Link } from 'react-router-dom';

const Content = ({item,addItem}) =>{
    
    const {title,last,id} = item

    return(

        <div className="">
            <div  className="content">
                        <Link to={`bookdetails/${id}`} className="img">
                            <img src="https://picsum.photos/200/300" alt="" />
                        </Link>
                        <h2 className="title">{title}</h2>
                        <h3 className="author">{last}</h3>   
                        <div className="button">
                            <div className="price">$ 3 </div>
                            <div className="button-con">
                                <button className="btn" onClick={() => addItem(item)}>add to cart</button>    
                            </div>    
                        </div> 
             </div>
        </div>
    )
}

const mapdispatchToProps = (dispatch) =>({
    addItem : (item) =>dispatch(addItem(item))
})

export default connect(null,mapdispatchToProps)(Content)