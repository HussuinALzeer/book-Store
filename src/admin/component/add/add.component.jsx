import React, { useEffect, useState } from "react";

import './add.styles.scss'

import { AddaBook, storage } from "../../../firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import FormInput from "../../../components/form-input/form-input.component";
import { ref as sRef } from 'firebase/storage';

import { getDownloadURL, uploadBytesResumable } from "firebase/storage";



const AddPage = () =>{

    const [file,setFile] = useState("")
    const [per, setPer] = useState("");

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

      ///////////////////////////////////////////////////////////////////////////////////////////////////


    function handleChange(evt) {
        const value = evt.target.value;
        setName({
          ...name,
          [evt.target.name]: value
        });
      }
      

    function handleSubmit(e){
        e.preventDefault();

        AddaBook(name.bookName,name.author,name.bookNumber,name.pages,name.Date,name.summary,name.img,name.price,name.lang)
    }  

   console.log(name);
      return (
        <div className="container">
            <div className="label">
                <h2>Add a new book</h2>
            </div>
            <div className="row ">
              <form className="form" onSubmit={handleSubmit} >
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
                        <button className="btn" type="submit">Add</button>
                    </div>
                </form>  
            </div>
        </div>
    )
}

export default AddPage;