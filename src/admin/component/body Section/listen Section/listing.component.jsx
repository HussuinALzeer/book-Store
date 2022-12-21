import React from "react";

import './listing.styles.scss'

import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from "@mui/material";


import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

///redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { collections } from "../../../../redux/Data/data.selector";
import { fetchBooksStartAsync } from "../../../../redux/Data/data.action";

//{collections,fetchBooksStartAsync}
class Listing extends React.Component {


    componentDidMount(){
        const {fetchBooksStartAsync} = this.props
        fetchBooksStartAsync()
    }

   render(){
   
    const {collections} = this.props

    return(
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listing</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                </button>
            </div>

            <div className="secContainer flex">
               <TableContainer component={Paper}>
                    <Table aria-label="Data table" stickyHeader>
                        <TableHead>
                            <TableRow>
                            <TableCell>Photo</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>Last Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                collections.map(row =>(
                                    <TableRow key={row.id} sx={{'&:last-child td,&:last-child th' :{border:0}}} >

                                        <TableCell> 
                                            <img className="table-image" src={row.img} alt="" />    
                                        </TableCell>                                        
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.author}</TableCell>
                                        <TableCell className="email" align="center">{row.email}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
               </TableContainer>
            </div>
        </div>
    )
}
}




const mapstateToProps = createStructuredSelector({
    collections
})

const mapDispatchToProps = dispatch =>({
    fetchBooksStartAsync: () => dispatch(fetchBooksStartAsync())
})

export default connect(mapstateToProps,mapDispatchToProps)(Listing)