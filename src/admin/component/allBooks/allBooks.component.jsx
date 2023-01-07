
import './allBook.styles.scss'

import { selectAdminEditPage } from '../../../redux/admin-nav-bar/admin.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import TableP from './addTable/table.component'

import EditBooks from '../allBooks/editBook/editBook.component'
import { thebook } from '../../../redux/Data/data.selector'
import { fetchBooksStartAsync } from '../../../redux/Data/data.action'
import React from 'react'
import { fetchTheBookAsync } from '../../../redux/Data/data.action'
import { selectAdminEditBookID } from '../../../redux/admin-nav-bar/admin.selector'
//{selectAdminEditPage}
class Allbooks extends React.Component {
  

  componentDidMount(){
    const {fetchTheBookAsync,selectAdminEditBookID} = this.props

    fetchTheBookAsync(selectAdminEditBookID)
    console.log('hiiiiiiiiiiiii');
    console.log(selectAdminEditBookID);
  }
  render(){
    const {selectAdminEditPage} = this.props

   


  return(
    
    <div className="dik ">
      {
        selectAdminEditPage?
        (<TableP/>)
        :(<EditBooks  />)
      }
    </div>
  )
}
}


const mapstateToProps = createStructuredSelector({
  selectAdminEditPage,
  thebook,
  selectAdminEditBookID
})

const mapdispatchToProps = dispatch =>({
  fetchBooksStartAsync : () => dispatch(fetchBooksStartAsync()),
  fetchTheBookAsync : (id) => dispatch(fetchTheBookAsync(id))
})


export default connect(mapstateToProps,mapdispatchToProps)(Allbooks)