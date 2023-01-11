import React from 'react'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar';
import Rightsidebar from '../../Components/Rightsidebar/Rightsidebar';
import '../../App.css';
import Homemainbar from '../../Components/Homemainbar/Homemainbar';

const home = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
        <Homemainbar/>
        <Rightsidebar/>
      </div>
    </div>
  )
}

export default home
