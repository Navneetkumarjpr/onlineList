import './newData.css';
import React,{useState,useContext} from 'react'
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';
import {AiOutlineRollback} from "react-icons/ai"
import { UserContext } from '../context/UserProvider';
const NewData = () => {
    let history = useHistory();
    const {userLogged} = useContext(UserContext)
    const [addData, setAddData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        googleId:userLogged.googleId
    })
    const values=(e)=>{
        setAddData({...addData,[e.target.name]:e.target.value});
        // console.log("student ",addData);
      }
      const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(addData.email.indexOf("@gmail.com"))
        if(addData.email.indexOf("@gmail.com")<0 || addData.firstname.length===0 || addData.lastname.length===0 || addData.phone.length!==10){
            alert("Add correct Details");
        }else{
            // api call required
            loadContactList();            
        }
      }
      const loadContactList= async () =>{
        try {
            await axios.post("http://localhost:8000/addcontact",addData);
            // setAddData({...addData});
            history.push('/')
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className='newDataPage'>
        <div className="newDataContainer">
            <h1>Add Contact Details</h1>
            <input className='dataInput' onChange={(e)=>{values(e)}} required name='firstname' type="text" placeholder='First name'/>
            <input className='dataInput' onChange={(e)=>{values(e)}} required name="lastname" type="text" placeholder='Last name'/>
            <input className='dataInput' onChange={(e)=>{values(e)}} required name='email' type="email" placeholder='Email'/>
            <input className='dataInput' onChange={(e)=>{values(e)}} required name='phone' type="phone" placeholder='Phone Number'/>
            <div className="dataButton">
                <Link to="/" className='backButton'><AiOutlineRollback/></Link>
                <button onClick={(e)=>{onSubmit(e)}} className='backButton'>Add Contact</button>
            </div>
        </div>
    </div>
  )
}

export default NewData