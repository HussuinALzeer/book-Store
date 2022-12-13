import React from "react";

import './listing.styles.scss'

import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from "@mui/material";


import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

const Listing = () =>{
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
                            <TableCell>ID</TableCell>
                            <TableCell>Photo</TableCell>
                            <TableCell>First name</TableCell>
                            <TableCell >Last Name</TableCell>
                            <TableCell className="email" align="center">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                tableData.map(row =>(
                                    <TableRow key={row.id} sx={{'&:last-child td,&:last-child th' :{border:0}}} >

                                        <TableCell>{row.id}</TableCell>
                                        <TableCell> 
                                            <img className="table-image" src={row.gender} alt="" />    
                                        </TableCell>                                        
                                        <TableCell>{row.first_name}</TableCell>
                                        <TableCell>{row.last_name}</TableCell>
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


const tableData =[{
    "id": 1,
    "first_name": "Randy",
    "last_name": "Oldred",
    "email": "roldred0@skype.com",
    "gender": "https://picsum.photos/200",
    "ip_address": "42.217.110.19"
  }, {
    "id": 2,
    "first_name": "Rolf",
    "last_name": "Broinlich",
    "email": "rbroinlich1@zimbio.com",
    "gender": "https://picsum.photos/200",
    "ip_address": "80.82.95.153"
  }, {
    "id": 3,
    "first_name": "Nicky",
    "last_name": "Lavalle",
    "email": "nlavalle2@dagondesign.com",
    "gender": "https://picsum.photos/200",
    "ip_address": "186.202.89.64"
  }, {
    "id": 4,
    "first_name": "Gwenni",
    "last_name": "Fowell",
    "email": "gfowell3@ca.gov",
    "gender": "https://picsum.photos/200",
    "ip_address": "251.113.203.246"
  }, {
    "id": 5,
    "first_name": "Ulrike",
    "last_name": "Noraway",
    "email": "unoraway4@craigslist.org",
    "gender": "https://picsum.photos/200",
    "ip_address": "53.233.206.114"
  }]

export default Listing