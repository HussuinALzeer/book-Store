import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.component';
import Header from './components/header/header.component';

import { BrowserRouter, Route ,Router, Routes, useLocation } from 'react-router-dom';
import SreachPage from './pages/search/research.component';
import Tags from './components/tags/tags.component';
import SearchBar from './components/search-bar/search-bar.component';
import Login from './pages/login/login.component';
import SignIn from './pages/sign-in/signin.component';
import BookDetails from './pages/book-details/book-details.component';
import Admin from './pages/admin/admin';
import AddPage from './admin/component/add/add.component';
import CartHomePage from './pages/cart-homepage/cartHomePage.component';
import {ReactComponent as BgIcon} from './asset/layered-steps-haikei.svg'

import { auth ,createUserProfileDocument, db } from './firebase';
import React from 'react';
import { doc, getFirestore } from 'firebase/firestore';

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUSer:null
    }
  }

  unsub = null

  componentDidMount(){
    this.unsub = auth.onAuthStateChanged(async user => {
      
      createUserProfileDocument(user)

      // console.log(doc(db,`users/1231235`));
      // console.log(user);
    })
  }

  render(){

  return (
    <div className="App" >
                            <Header></Header>
          {/* <BgIcon className='bgIcon'></BgIcon> */}
          <Routes>

            <Route path='/' element={<Home></Home>} ></Route>
            {/* <Route path='/search' element={<SreachPage></SreachPage>} ></Route> */}
            <Route path='/search/:id' element={<SreachPage></SreachPage>} ></Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/bookdetails/:bookId' element={<BookDetails></BookDetails>} ></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
            <Route path='/cart' element={<CartHomePage/>}></Route>
            
          </Routes>
      

    </div>
  );
  }
}

export default App;
