import { Routes,Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
function App() {

  return (
    <div className='App'>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route to='/login' element={<PlaceOrder/>}/>
     </Routes>
    </div>
  )
}

export default App;