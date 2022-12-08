import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import Content from "../conetent/conetent.component";

import './book-item.styles.scss'

const MenyItem= ({title,last}) =>{

   

    return(
        <div className="">
            <div className="menu-item">
                   <Content title={title} last={last} ></Content>
                </div>
        </div>
    )
}

export default MenyItem