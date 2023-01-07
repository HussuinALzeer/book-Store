import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import MenyItem from "../../components/books/books-item/book-item.component";
import { db } from "../../firebase";
import './home.styles.scss';
import Header from "../../components/header/header.component";
import Tags from "../../components/tags/tags.component";
import SearchBar from "../../components/search-bar/search-bar.component";

import { searchBar } from "../../redux/getbook/book.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Home = ({searchBar}) =>{

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


    const filterBooks = books.filter(book => 
        book.name.toLowerCase().includes(searchBar.toLowerCase())
        )


    return(


        <div className="homepage" id="homepage">
                  
          <SearchBar></SearchBar>          
          
            <div className="directory-menu">
                {

                    filterBooks.map((item) =>(
                        <MenyItem key={item.id} item={item} ></MenyItem>
                    ))
                }
                
            </div>
        </div>
    )
}

const mapState = createStructuredSelector({
    searchBar
})

export default connect(mapState)(Home)
