import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from './pages/Shop/Shop';
import { Details } from './pages/Details/Details';
import { Favorite } from './pages/Favorite/Favorite';
import Cart from './pages/Cart/Cart';
import { Clothes } from './pages/Clothes/Clothes';
import { Accessories } from './pages/Accessories/Accessories';
import { Phones } from './pages/Phones/Phones';
import { Laptops } from './pages/Laptops/Laptops';


function App() {
  
  return (
    <>
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/clothes' element={<Clothes/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
          <Route path='/phones' element={<Phones/>}/>
          <Route path='/laptops' element={<Laptops/>}/>
        </Routes>
      </Router>
      
    </div>
    
      
    </>
  )
}

export default App
