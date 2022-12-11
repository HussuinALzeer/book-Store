import React, { useEffect, useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import './search-bar.styles.scss'


const SearchBar = () =>{
    const nav = useNavigate()

    const [searchBar,setSearchBar] = useState('')

    const handelChange = (e)  =>{
        setSearchBar(e.target.value)
    }


   
    return(
        <div className="Search-container">
            
                <div className="search-con " >
                    <input type="text" placeholder="Search" value={searchBar} onChange={handelChange} />
                    <Link to={`search/${searchBar}`} className="icon-s"></Link>

                </div>
            
        </div>
    )
}

export default SearchBar