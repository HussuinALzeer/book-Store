import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import MenyItem from "../../components/books/books-item/book-item.component";
import Header from "../../components/header/header.component";
import { db } from "../../firebase";
import './home.styles.scss';



const Home = () =>{
    const [books,setBooks]=useState([])

    useEffect (() =>{
        const fetchData = async () =>{
           let list =[] 
            try {
                const querySnapshot = await getDocs(collection(db, "books"));
                querySnapshot.forEach((doc) => {
                list.push({id:doc.id,...doc.data()})    
            });
            setBooks(list)
            } catch (error) {
                
            }
        }
        fetchData()
    },[])

    console.log(books);

    return(


        <div className="homepage">
            <div className="directory-menu">
                {

                    books.map(({id,title,last}) =>(
                        <MenyItem key={id} title={title} last={last} ></MenyItem>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Home