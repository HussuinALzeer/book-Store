import React, { useState } from "react";

import './editBook.styles.scss'

import { selectAdminEditBookID } from "../../../../redux/admin-nav-bar/admin.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "../../../../components/form-input/form-input.component";
const EditBooks = ({selectAdminEditBookID}) =>{

    const [name,setName] = useState({
        bookName:'',
        author:'',
        bookNumber:'',
        pages:'',
        Date:'',
        Tags:'',
        summary:''

    })

    function handleChange(evt) {
  const value = evt.target.value;
  setName({
    ...name,
    [evt.target.name]: value
  });
}
    
    return (
        <div className="container">
            <div className="label">
                <h2>Add a new book</h2>
            </div>
            <div className="row ">
              <form className="form" >
                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='name' type='text' value={name.bookName} label="name" handleChange={handleChange} required ></FormInput>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='author' type='text' value={name.author} label="author" handleChange={handleChange} required ></FormInput>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='bookNumber' type='text' value={name.bookNumber} label="Book number" handleChange={handleChange} required ></FormInput>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='pages' type='text' value={name.pages} label="pages" handleChange={handleChange} required ></FormInput>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='pages' type='date' value={name.Date}  handleChange={handleChange} required ></FormInput>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='pages' type='text' value={name.summary} label="summary" handleChange={handleChange} required ></FormInput>
                    </div>

                    <div className="col-lg-12 mt-5 btn-container">
                        <div className="btn">save</div>
                        <div className="btn">cancel</div>
                    </div>
                </form>  
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    selectAdminEditBookID    
})

export default connect(mapStateToProps)(EditBooks)