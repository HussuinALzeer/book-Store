import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import TagContent from "./content/tag-content,compoent";

import './tags.styles.scss'


const Tags=()=>{

    const [tags,setTags] = useState([])

    useEffect( () =>{
        const fetchData = async () =>{
            let list= []
            try {
                const querySnapshot = await getDocs(collection(db, "tags"));
                querySnapshot.forEach((doc) => {
                list.push({id:doc.id,...doc.data()})    
            });
            setTags(list)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])


    return(
        <div className="Tags">
            {
                tags.map(tag => (
                    <TagContent key={tag.id} tag={tag} ></TagContent>
                ))
            }


        </div>
    )
}

export default Tags;