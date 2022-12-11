import React from "react";
import { Link } from "react-router-dom";

import './tag-content.styles.scss'

const TagContent= ({tag}) =>{
const {name} =tag

    return(
        <div className="box">
                <Link to={`search/${name}`} className="content">
                    {name}
                </Link>
            </div>
    )
}

export default TagContent