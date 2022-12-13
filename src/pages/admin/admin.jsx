import React from "react";
import Body from "../../admin/component/body Section/body";
import Sidebar from "../../admin/component/sidebare Section/sidebar.component";
import './admin.styles.scss'

const Admin = () =>{
    return(
        <div className="containerr">
            <Sidebar></Sidebar>
            <Body></Body>
        </div>
    )
}

export default Admin