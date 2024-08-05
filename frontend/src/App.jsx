import { Routes,Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import { useState } from 'react';
function App() {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='App'>
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route to='/login' element={<PlaceOrder/>}/>
     </Routes>
    </div>
  <Footer/>
    </>
  )
}

export default App;