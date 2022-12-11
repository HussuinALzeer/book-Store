import React, { useState } from "react";

import './login.styles.scss'

import FormInput from '../../components/form-input/form-input.component'

import CustomButton from '../../components/custom-button/custtom-button.component'
import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

import { useNavigate } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () =>{

    const navigate = useNavigate();

    const [userCredentails, setCredentials] = useState({email:'',password:''})

    const {email,password} = userCredentails



    const handleSubmit= (e) =>{
        e.preventDefault()
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;


            // toast.success('Success Notification !', {
            //     position: toast.POSITION.TOP_RIGHT
            // });

            // setTimeout(()=>{
            //     navigate('/')
            // },3000)
        
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

  


    const handelChange = (event)=>{
        const {value,name} =event.target;

        setCredentials({...userCredentails, [name]:value}) // the name is the email and the value is what i will type in there
    }

    return(
        <div className="">


             <div className="SignIn">
                <span>Sign in</span>


                <form onSubmit={handleSubmit}>

                    <FormInput
                    type="emai"
                    name="email"
                    value={email}
                    required
                    handleChange={handelChange}
                    label="email"
                    />

                    <FormInput
                    type="password"
                    name="password"
                    value={password} 
                    required
                    handleChange={handelChange}
                    label="password"
                    />
                    <div className="btn-con">
                    <CustomButton type="submit" > Sign In</CustomButton>
                    <ToastContainer></ToastContainer>
                    </div>


                </form>
                </div>
                        </div>
                    
    )
}

export default Login