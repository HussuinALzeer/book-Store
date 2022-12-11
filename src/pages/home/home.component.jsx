import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import MenyItem from "../../components/books/books-item/book-item.component";
import { db } from "../../firebase";
import './home.styles.scss';
import Header from "../../components/header/header.component";
import Tags from "../../components/tags/tags.component";
import SearchBar from "../../components/search-bar/search-bar.component";


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


    return(


        <div className="homepage">
                  
          <SearchBar></SearchBar>          
          <Tags></Tags>
            <div className="directory-menu">
                {

                    books.map((item) =>(
                        <MenyItem key={item.id} item={item} ></MenyItem>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Home