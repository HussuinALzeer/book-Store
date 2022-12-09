import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import './content.styles.scss'
import {ReactComponent as Logo} from '../../../asset/cart.svg'

import { connect } from "react-redux";

import { addItem } from "../../../redux/cart/cart.action";

const Content = ({item,addItem}) =>{
    
    const {title,last} = item

    const add = async (e) =>{
        e.preventDefault()
        // try {
        //     const docRef = await addDoc(collection(db, "books"), {
        //       title: "Lovelace",
        //       last: "Lovelace author",
              
        //     });
        //     console.log("Document written with ID: ", docRef.id);
        //   } catch (e) {
        //     console.error("Error adding document: ", e);
        //   }

    }

    return(

        <div className="">
            <div className="content">
                        <div className="img">
                            <img src="https://picsum.photos/200/300" alt="" />
                        </div>
                        <h2 className="title">{title}</h2>
                        <h3 className="author">{last}</h3>   
                        <div className="button">
                            <div className="price">price</div>
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