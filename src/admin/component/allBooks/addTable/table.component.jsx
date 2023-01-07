

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../../firebase';

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAdminEditPage } from '../../../../redux/admin-nav-bar/admin.selector';
import { Edit_on,Edit_off } from '../../../../redux/admin-nav-bar/admin.action';

///
import { collections } from '../../../../redux/Data/data.selector';
import { fetchBooksStartAsync } from '../../../../redux/Data/data.action';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 170 },
  { id: 'population',label: 'Population',minWidth: 110,},
  { id: 'edit',label: 'edit',minWidth: 110,},
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),

];


 const TableP = ({selectAdminEditPage,editOff,collections}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);



  ///////// bring the data ///////
  
/////////////////////////////

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  

  return (
    
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {collections
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow  hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell> <img src={row.img} className='table-image' alt="" /> </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>3{row.booknumber}</TableCell>
                    <TableCell> <button className='btn' onClick={()=> editOff(row.id)}>edit</button> </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
            
}

const mapstateToProps = createStructuredSelector({
  selectAdminEditPage,
  collections
})

const mapDispatchToProps = (dispatch) => ({
  editOn: (item) => dispatch(Edit_on(item)),
  editOff: (item) => dispatch(Edit_off(item))

})

export default connect(mapstateToProps,mapDispatchToProps)(TableP)