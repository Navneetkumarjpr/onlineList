import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import './homePage.css';
import UserBlock from './UserBlock';
const HomePage = () => {
  const [contacts, setContacts] = useState([]);
  const {userLogged} = useContext(UserContext);
  // console.log(userLogged.googleId)
  useEffect(() => {
    fetchResult();
  }, [])
  const fetchResult= async()=>{
    try {
      // alert("calling get all contacts");
      const res = await axios.get(`http://localhost:8000/contacts/${userLogged.googleId}`)
      // alert("done get all contacts");
      setContacts(res.data);
      // console.log(res.data);
    } catch (error) { 
        console.log("res error ", error)
    }
}
  return (
    <div className='homePage'>
      {
        contacts.map((item,key)=>{
          return(
            <UserBlock item={item} key={key} fetchResult={fetchResult}/>
          )
        })
      }
    </div>
  )
}

export default HomePage