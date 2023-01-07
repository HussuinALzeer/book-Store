import React, { useEffect, useState } from "react";
import './editBook.styles.scss'
import FormInput from "../../../../components/form-input/form-input.component";


import { getDatabase , ref, set } from "firebase/database";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ref as sRef } from 'firebase/storage';


import { editBook, storage } from "../../../../firebase";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchTheBookAsync, } from "../../../../redux/Data/data.action";

import { selectAdminEditBookID } from "../../../../redux/admin-nav-bar/admin.selector";
import { collections } from "../../../../redux/Data/data.selector";
import { thebookInfo } from "../../../../redux/getbook/book.selector";
import { fetchTheBookInfoAsync } from "../../../../redux/getbook/book.action";

const EditBooks = ({selectAdminEditBookID}) =>{
    
    const [file,setFile] = useState("")
    const [per, setPer] = useState("");

    useEffect(()=>{

        const uploadFile = () =>{
    
          const namee = new Date().getTime() + file.name
          const storageRef = sRef(storage, namee);
    
          const uploadTask = uploadBytesResumable(storageRef, file);
    
    
          uploadTask.on('state_changed', 
          (snapshot) => {
            
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
            setPer(progress)
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
    
                default:
                  break
            }
          }, 
          (error) => {
            console.log(error);
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              
              setName((perv) =>({...perv,img:downloadURL}))
              
            });
          }
          );
    
        }
        file && uploadFile();
      },[file])


    const [name,setName] = useState({
        bookName:'',
        author:'',
        bookNumber:'',
        pages:'',
        Date:'',
        Tags:'',
        summary:'',
        theBook:'',
        img:'',
        price:'',
        lang:''

    })

    const handle = () =>{
        // fetchTheBookInfoAsync(selectAdminEditBookID)

    }
   handle()

   

    function handleChange(evt) {
  const value = evt.target.value;
  setName({
    ...name,
    [evt.target.name]: value
  });
}

    function handleSubmite (e) {
        e.preventDefault()
        editBook(selectAdminEditBookID,name.bookName,name.author,name.bookNumber,name.Date,name.pages,name.summary,name.lang,name.img,name.price)

    }
    
    return (
        <div className="container">
            <div className="label">
                <h2>Edit book</h2>
            </div>
            <div className="row ">
              <form className="form" onSubmit={handleSubmite} >
              <div className="col-lg-6 col-sm-12">
                    <FormInput  name='bookName' type='text' value={name.bookName} label="name" handleChange={handleChange} required ></FormInput>
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
                    <FormInput  name='price' type='text' value={name.price} label="price" handleChange={handleChange} required ></FormInput>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='lang' type='text' value={name.lang} label="language" handleChange={handleChange} required ></FormInput>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='Date' type='date' value={name.Date}  handleChange={handleChange} required ></FormInput>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <FormInput  name='summary' type='text' value={name.summary} label="summary" handleChange={handleChange} required ></FormInput>
                    </div>
                    <div className="col-lg-6 col-sm-12">

                    <FormInput id='file' type='file'   handleChange={(e) => setFile(e.target.files[0])}  ></FormInput>
                    </div>

                    <div className="col-lg-12 mt-5 btn-container">
                        <button className="btn" type="submit">Save</button>
                        <div className="btn">cancel</div>
                    </div>
                </form>  
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    selectAdminEditBookID,
    thebookInfo,
    
})

const mapDispatchToProps = dispatch =>({
    fetchTheBookAsync: (id) =>dispatch(fetchTheBookAsync(id)),
    fetchTheBookInfoAsync: (id) =>dispatch(fetchTheBookInfoAsync(id)),
})

export default connect(mapStateToProps,mapDispatchToProps)(EditBooks)