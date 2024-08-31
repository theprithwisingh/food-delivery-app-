import './App.css'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
function App() {

  return (
    <div className='App'>
      <Navbar/>
      <hr />
      <div className='app-content'>
      <Sidebar/>
      </div>
    </div>
  )
}

export default App;
