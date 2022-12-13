import React from "react";
import './body.styles.scss'
import Top from './top Section/top.component'
import Listing from './listen Section/listing.component'
import Activity from './active Section/active.component'


const Body = () =>{
    return(
        <div className="mainContent">
            <Top></Top>

            <div className="bottom flex">
                <Listing></Listing>
                <Activity></Activity>
             
            </div>
        </div>
    )
}

export default Body