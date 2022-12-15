
import './allBook.styles.scss'

import { selectAdminEditPage } from '../../../redux/admin-nav-bar/admin.selector'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import TableP from './addTable/table.component'

import EditBooks from '../allBooks/editBook/editBook.component'

const Allbooks = ({selectAdminEditPage}) =>{

  return(
    
    <div className="dik ">
      {
        selectAdminEditPage?
        (<TableP/>)
        :(<EditBooks/>)
      }
    </div>
  )
}



const mapstateToProps = createStructuredSelector({
  selectAdminEditPage
})


export default connect(mapstateToProps)(Allbooks)