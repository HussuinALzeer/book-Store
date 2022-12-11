import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

import { useParams } from "react-router-dom";

import './research.styles.scss'
import MenyItem from "../../components/books/books-item/book-item.component";

const SreachPage = () =>{

    const {id} =useParams()
    const [search,setSearch] = useState([])


    useEffect (() =>{
        const fetchData = async () =>{
           let list =[] 
            try {
                const querySnapshot = await getDocs(collection(db, "books"));
                querySnapshot.forEach((doc) => {
                list.push({id:doc.id,...doc.data()}) ;

                if(list){
                    const searchResult = list.filter(item => 
                        item.title.toLowerCase().includes(id.toLowerCase())
                    )

                    setSearch(searchResult)

                }
                

            });
            } catch (error) {
                
            }
        }
        fetchData()
    },[search])


    return(
        <div className="search-conn">
            <div className="bg">
             <div className="directory-menu">
                {

                    search.map((item) =>(
                        <MenyItem key={item.id} item={item} ></MenyItem>
                    ))
                }
                
            </div>
            </div>
        </div>
    )
}

export default SreachPage