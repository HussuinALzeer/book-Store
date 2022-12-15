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

import { Allbooks,Dashboard,Addbook,RecentOrder } from "../../../redux/admin-nav-bar/admin.action";
import { connect } from "react-redux";

const Sidebar = ({Allbooks,Dashboard,Addbook,RecentOrder}) =>{
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

                    <li className="listItem" onClick={() =>Dashboard()}>
                        <div href="#" className="menuLink flex">
                        <IoMdSpeedometer className="icon" ></IoMdSpeedometer>
                        <span className="smallText">
                            Dash board
                        </span>
                        </div>
                    </li>

                    <li className="listItem" onClick={() =>Allbooks()}>
                        <div href="#" className="menuLink flex">
                        <MdDeliveryDining className="icon" />
                        <span className="smallText">
                            my Books
                        </span>
                        </div>
                    </li>

                    <li className="listItem" onClick={() =>RecentOrder()}>
                        <div href="#" className="menuLink flex">
                        <MdOutlineExplore className="icon" />
                        <span className="smallText">
                            Explore
                        </span>
                        </div>
                    </li>

                    <li className="listItem" onClick={() =>Addbook()}>
                        <div href="#" className="menuLink flex">
                        <GrFormAdd className="icon" />
                        <span className="smallText">
                            Add a book
                        </span>
                        </div>
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


const mapDispatchToProps = (dispatch)=>({

    Allbooks: () => dispatch(Allbooks()),
    Dashboard: () => dispatch(Dashboard()),
    Addbook: () => dispatch(Addbook()),
    RecentOrder: () => dispatch(RecentOrder()),

})


export default connect(null,mapDispatchToProps)(Sidebar)