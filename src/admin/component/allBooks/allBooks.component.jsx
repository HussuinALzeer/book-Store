
import './allBook.styles.scss'

import { selectAdminEditPage } from '../../../redux/admin-nav-bar/admin.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import TableP from './addTable/table.component'

import EditBooks from '../allBooks/editBook/editBook.component'
import { thebook } from '../../../redux/Data/data.selector'
import { fetchBooksStartAsync } from '../../../redux/Data/data.action'


const Allbooks = ({selectAdminEditPage,fetchBooksStartAsync,thebook}) =>{
  
  
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



const mapstateToProps = createStructuredSelector({
  selectAdminEditPage,
  thebook
  
})

const mapdispatchToProps = dispatch =>({
  fetchBooksStartAsync : () => dispatch(fetchBooksStartAsync())
})


export default connect(mapstateToProps,mapdispatchToProps)(Allbooks)