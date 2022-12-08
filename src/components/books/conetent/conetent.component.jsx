import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import './content.styles.scss'
import {ReactComponent as Logo} from '../../../asset/cart.svg'


const Content = ({title,last}) =>{
    
    

    const add = async (e) =>{
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "books"), {
              title: "Lovelace",
              last: "Lovelace author",
              
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

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
                                <button className="btn" onClick={add}>add to cart</button>    
                            </div>    
                        </div> 
                    </div>
        </div>
    )
}

export default Content