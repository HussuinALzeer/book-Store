import React, { useEffect, useState } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import './search-bar.styles.scss'

import { fetchSearchBar } from "../../redux/getbook/book.action";
import { connect } from "react-redux";

const SearchBar = ({fetchSearchBar}) =>{

    const [searchBar,setSearchBar] = useState('')

    const handelChange = (e)  =>{
        setSearchBar(e.target.value)
        
        fetchSearchBar(e.target.value)
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

const mapDispatchToProps = dispatch =>({
    fetchSearchBar:(text) => dispatch(fetchSearchBar(text))
})

export default connect(null,mapDispatchToProps)(SearchBar)