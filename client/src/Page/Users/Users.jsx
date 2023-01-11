import React from 'react'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import { useLocation } from 'react-router-dom'
import UsersList from './UsersList';
import './Users.css'

const Users = () => {

    const location = useLocation();
    // console.log(location)

  return (
    <div className='home-container-1'>
        <Leftsidebar/>
        <div className="home-container-2" style={{marginTop: "20px"}}>
            <h1 style={{fontWeight: "400"}}>Users</h1>
            <UsersList/>
        </div>
    </div>
  )
}

export default Users
