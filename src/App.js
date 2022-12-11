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


function App() {

  // const Location = useLocation()signup

  return (
    <div className="App" >
                            <Header></Header>

          <Routes>

            <Route path='/' element={<Home></Home>} ></Route>
            {/* <Route path='/search' element={<SreachPage></SreachPage>} ></Route> */}
            <Route path='/search/:id' element={<SreachPage></SreachPage>} ></Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/bookdetails/:bookId' element={<BookDetails></BookDetails>} ></Route>

          </Routes>
      

    </div>
  );
}

export default App;
