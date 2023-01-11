import React,{useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/logo.png';
import search from '../../assets/search.png';
// import Button from '../../Components/Button/Button';
import Avatar from '../../Components/Avatar1/Avatar';
import './Navbar.css';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentUser} from '../../actions/currentUser'
import decode from 'jwt-decode';

const Navbar = () => {

  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
    navigate('/');
    dispatch(setCurrentUser(null))
  }
  //to remove the vale from localStorage by creating sideeffects
  // to check the token is experied or not we will use useEffect
  useEffect(() => {
    const token = User?.token;
    if(token)
    {
      const decoderToken = decode(token); //if token is valid then decode will have a value
      if(decoderToken.exp * 1000 < new Date().getTime())
      {
          handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  },[dispatch])
  return (
    <nav className='main-nav'>
      <div className='navbar'>
            <Link to="/" className='nav-item nav-logo'>
                <img src={logo} alt='logo' height={"25px"} width={"100px"}/>
            </Link>
            <Link to="/" className='nav-item nav-btn'>About</Link>
            <Link to="/" className='nav-item nav-btn'>Products</Link>
            <Link to="/" className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search...'/>
                <img src={search} alt="search" width={20} height={18} className="search-icon"/>
            </form>
            { User === null ? 
                <Link to="/Auth" className='nav-item nav-links'>Login</Link> : 
                <>
                <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'><Link to={`/Users/${User?.result?._id}`} style={{textDecoration:"none",color:"white"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Logout</button>
                </>
            }
      </div>
    </nav>
  )
}

export default Navbar
