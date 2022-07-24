import React from 'react';
import './Home.css'
import Navbar from '../../Navbar/Navbar'

const Home = () => {
  return (
    <div className='Home-bg'>
      <Navbar />
      <div className='Home'>
        <div className="Home-left">
          <h2>SO,YOU WANT TO TRAVEL TO</h2>
          <span className='Space'>SPACE</span>
          <p className="Home-para">Let's face it:you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it it.Well sit back, and relax because we'll give you a truly out of this world experience</p>
        </div>
        <div className="Home-expo"><span>EXPLORE</span></div>
      </div>
    </div>
  )
}

export default Home
