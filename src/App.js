
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';


function App() {

  

  return (

    <Routes>
      <Route path='/' element={<Navbar/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/home' element={<Home/>}/>
    </Routes>

    
  );
}

export default App;
