import React from "react";

import './active.styles.scss'
import {BsArrowRightShort} from 'react-icons/bs'

const Activity = () =>{
    return(
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent buy</h1>

                <button className="btn flex"> see all
                    <BsArrowRightShort className="icon" />
                </button>
            </div>


            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src="https://picsum.photos/200" alt="" />
                    <div className="customerdetails">
                        <span className="name">book Name</span>
                        <small>Order number</small>
                    </div>

                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Activity