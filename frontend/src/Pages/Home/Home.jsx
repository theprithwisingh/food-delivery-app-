import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu/>
    </div>
  )
}

export default Home;
