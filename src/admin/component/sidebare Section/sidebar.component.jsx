import React from "react";

import './sidebar.styles.scss'

// img

import logo from '../../../asset/cart.svg'

//icon
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining ,MdOutlineExplore} from 'react-icons/md'
import {GrFormAdd} from 'react-icons/gr'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {BsQuestionCircle} from 'react-icons/bs'


const Sidebar = () =>{
    return(
        <div className="sidebar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="" />
                <h2>Planti</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <IoMdSpeedometer className="icon" ></IoMdSpeedometer>
                        <span className="smallText">
                            Dash board
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdDeliveryDining className="icon" />
                        <span className="smallText">
                            my Books
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdOutlineExplore className="icon" />
                        <span className="smallText">
                            Explore
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <GrFormAdd className="icon" />
                        <span className="smallText">
                            Dash board
                        </span>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="settingDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <AiOutlinePieChart className="icon" />
                        <span className="smallText">
                            Charts
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <BiTrendingUp className="icon" />
                        <span className="smallText">
                            Trends
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <MdOutlineExplore className="icon" />
                        <span className="smallText">
                            Explore
                        </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                        <GrFormAdd className="icon" />
                        <span className="smallText">
                            Dash board
                        </span>
                        </a>
                    </li>

                </ul>
            </div>


            <div className="sidebarCard">
                <BsQuestionCircle className="icon" />
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>Having touble please contact us for more quistions</p>
                    <button className="btn"> go to help</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar