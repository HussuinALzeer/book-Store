import React from "react";

import './top.styles.scss'

import {BiSearchAlt,BiUserCircle} from 'react-icons/bi'
import {TbMessageCircle} from 'react-icons/tb'
import {AiFillNotification} from 'react-icons/ai'
import {BsArrowRightShort, BsQuestionCircle} from 'react-icons/bs'

const Top = () =>{
    return(
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to pranti</h1>
                    <p>Hello  Admin, Welcome back</p>
                </div>

                <div className="searchBar">
                    <input type="text" placeholder="Search Dashboard" />
                    <BiSearchAlt className="icon" />
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon" />
                    <AiFillNotification className="icon" />
                    <div className="adminImage">
                        <BiUserCircle className="icon" />
                    </div>
                </div>


            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and Sell</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, omnis!</p>
                
                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Seller</button>
                    </div>

                    
                </div>

                <div className="leftCard">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>My stat</h1>

                            <div className="flex">
                                <span>
                                    Today <br /> <small>4 order</small>
                                </span>
                                <span>
                                    This Month <br /> <small>127 Order</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Go to my orders <BsArrowRightShort className="icon"></BsArrowRightShort>
                            </span>

                           

                        </div>

                        <div className="imgDiv">
                            {/* <img src="https://picsum.photos/200" alt="" /> */}
                        </div>
                    </div>

                
                </div>
            </div>
        </div>
    )
}

export default Top