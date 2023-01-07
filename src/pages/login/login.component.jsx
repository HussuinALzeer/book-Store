import React, { useState } from "react";

import './login.styles.scss'
import 'react-toastify/dist/ReactToastify.css';
import {ReactComponent as FbIcon} from '../../asset/fb.svg'
import { signInWithGoogle } from "../../firebase";
import { CreateWithEmailPassword } from "../../firebase";

import { connect } from "react-redux";
import { changeLoginTitle } from "../../redux/cart/cart.action";
import { useNavigate } from 'react-router-dom';

const Login = ({changeLoginTitle}) =>{

  const history = useNavigate();

  
    const [userCredentails, setCredentials] = useState({email:'',password:''})

    const {email,password} = userCredentails



    const handleSubmit= (e) =>{
        e.preventDefault()
        CreateWithEmailPassword(email,password)
        changeLoginTitle()
        history('/');

    }


  
    const handelS = (e) =>{
      e.preventDefault()
      signInWithGoogle()
      changeLoginTitle()
      history('/');

    }


    const handelChange = (event)=>{
        const {value,name} =event.target;

        setCredentials({...userCredentails, [name]:value}) // the name is the email and the value is what i will type in there

    }

    console.log(email,password);
    return(
      <div className="">

        <div className="containerr" id="container">
          <div className="form-container sign-up-container">
          
          </div>
          <div className="form-container sign-in-container">

            <form onSubmit={handleSubmit}>
              <h1>Sign in</h1>
              <div className="social-container">
                <div type="submit" className="social" onClick={handelS}><FbIcon></FbIcon></div>
              </div>

              <span>or use your account</span>

              <input className="input" type="email" placeholder="Email" value={email}  name="email" onChange={handelChange} required />
              <input className="input" type="password" placeholder="Password" value={password} name="password" onChange={handelChange} required />
              <button type="submit">Sign In</button>
            </form>


          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
              </div>
            </div>
          </div>
        </div>

      </div>
                    
    )
}

const mapdispatchToProps= dispatch => ({
  changeLoginTitle :() => dispatch(changeLoginTitle())
})


export default connect(null,mapdispatchToProps)(Login)