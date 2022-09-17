import './header.css';
import React,{useContext} from 'react'
import {GoogleLogout} from "react-google-login"
import { clientId } from '../data/Data';
import back from "../images/back.jpg"
import { Link } from 'react-router-dom';
import {ImHome} from "react-icons/im"
import {AiOutlineUserAdd} from "react-icons/ai"
import { UserContext } from '../context/UserProvider';

const Header = () => {
  const {userLogged,setUserLogged} = useContext(UserContext);
  // console.log(userLogged);
    const onLogoutSuccess=()=>{
        alert("you have been logged out successfully");
        setUserLogged(null);
    }
  return (
    <div className='header'>
        <div className="leftHeader">
          <Link to='/'><img src={userLogged.imageUrl} alt="" className='profileImage'/></Link>
          <h2 className='welcomeHeading'>Hello <p>{userLogged.name} !</p></h2> 
        </div>
        <div className="headerButton">
            <Link to='/' className='addButton'><ImHome/> Home</Link>
            <Link to='/newData' className='addButton'><AiOutlineUserAdd/> Add New Data</Link>
        </div>
        <div className="rightHeader">
        <GoogleLogout 
                    clientId={clientId}  
                    buttonText="Logout" 
                    onLogoutSuccess={onLogoutSuccess}
                    // className={classes.logout}
                     >

                </GoogleLogout>
        </div>
    </div>
  )
}

export default Header