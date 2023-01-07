import React from "react";
import './body.styles.scss'
import Top from './top Section/top.component'
import Listing from './listen Section/listing.component'
import Activity from './active Section/active.component'
import { selectAdminAdd,selectAdminDashBoard,selectAdminallbooks,selectAdminrecentOrder } from "../../../redux/admin-nav-bar/admin.selector";

import AddPage from "../add/add.component";
import Allbooks from "../allBooks/allBooks.component";
import RecentOrder from "../RecentOrder/recentOrder.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Body = ({selectAdminAdd,selectAdminDashBoard,selectAdminallbooks,selectAdminrecentOrder}) =>{
    return(
        <div className="mainContent">
            <Top></Top>
            
            <div className="bottom flex">
                {
                    selectAdminDashBoard? (
                    <Listing></Listing>
                        // <Activity></Activity>
                    ) :
                    (
                        null
                    )
                }
                
                {
                    selectAdminDashBoard? (
                    // <Listing></Listing>
                        <Activity></Activity>
                    ) :
                    (
                        null
                    )
                }

                {
                    selectAdminAdd ? 
                    <AddPage></AddPage>
                    :null

                }

                {
                    selectAdminallbooks?
                    <Allbooks></Allbooks>
                    :null

                }

                {
                    selectAdminrecentOrder?
                    <RecentOrder></RecentOrder>
                    :null
                }

             
            </div>
        </div>
    )
}

const mapStateToProps= createStructuredSelector({
selectAdminAdd: selectAdminAdd,
selectAdminDashBoard: selectAdminDashBoard,
selectAdminallbooks: selectAdminallbooks,
selectAdminrecentOrder: selectAdminrecentOrder
})

export default connect(mapStateToProps)(Body)