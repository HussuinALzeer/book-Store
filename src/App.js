import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
