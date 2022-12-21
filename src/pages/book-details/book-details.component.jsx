import React, { useEffect, useState } from "react";
import { getDoc,doc } from "firebase/firestore";
import './book-details.styles.scss'
import { useParams } from "react-router-dom";

import { db } from "../../firebase";



const BookDetails = () =>{
    const params = useParams();

    const [thebook,setTheBook] = useState([])

    

    useEffect(() =>{
        const getD = async () =>{

            const docRef = doc(db, "books",params.bookId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                setTheBook(docSnap.data())

            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            } 
    
        }

        getD()
    },[])
    

    return(
        <div className="book-details mt-2">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-2 book-img">
                        <div className="img">
                            <img src={thebook.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7  book-details">

                    <div className="book-details-d ">
                    <div className=" lh"><h2 className="title"> {thebook.name}</h2></div>
                        <div className="authro lh"><h3 className="title"> {thebook.author}</h3></div>
                            <p className="EAN-ISBN"> <span>EAN / ISBN :</span> {thebook.booknumber}</p>
                            <p className="product-details"><span>media :</span> PDF</p>
                            <p className="number-of-pages"><span>number of pages : </span>{thebook.pages}</p>
                            <p className="Release-date"><span>Release date :</span> {thebook.data}</p>
                            <p className="language"><span>language:  </span>{thebook.lang}</p>

                         </div>  
                       
                         <div className="lh"> <h4>Summary</h4></div>
                        <div className="description">{thebook.summary}</div>
                        
                      
                        

                    </div>
                    <div className="col-lg-3 add-to-cart">

                        <div className="box">
                            <div className="price">Cost $3</div>
                            <button className="btn" > add to cart</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails