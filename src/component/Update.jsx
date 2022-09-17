import React,{useState, useEffect,useContext} from 'react'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';

import { UserContext } from '../context/UserProvider';
const Update = () => {
    let history = useHistory();
    const {userLogged} = useContext(UserContext);
    const[user,setUser]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        googleId:userLogged.googleId
    });
    let {id} = useParams();
    useEffect(() => {
        loadContact();
        // console.log("id ",id) 
    }, []);
    const loadContact= async () =>{
        try {
    //   alert("calling get a contact");
            let res=await axios.get(`http://localhost:8000/contact/${id}`);
    //   alert("done get a contact");
            // console.log("res",res.data[0]);
            setUser(res.data[0]);
          } catch (error) {
              console.log("res error ", error)
          }
     };
     
    const values=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
        // console.log(user)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(addData.email.indexOf("@gmail.com"))
        updateFunc();        
      }

      const updateFunc=async()=>{
        if(user.email.indexOf("@gmail.com")<0 || user.firstname.length===0 || user.lastname.length===0 || user.phone.length!==10){
            alert("Add correct Details");
        }else{
                alert('Successfully updated the  Contact');
               await axios.put(`http://localhost:8000/update/detail/${id}`,user);
               history.push("/");
        }
    }
 
  return (
    <div className='newDataPage '>
        <div className="newDataContainer updatePage">
            <h1>Update Details</h1>
            <input className='dataInput' value={user.firstname} onChange={(e)=>{values(e)}} required name='firstname' type="text" placeholder='First name'/>
            <input className='dataInput' value={user.lastname} onChange={(e)=>{values(e)}} required name="lastname" type="text" placeholder='Last name'/>
            <input className='dataInput' value={user.email} onChange={(e)=>{values(e)}} required name='email' type="email" placeholder='Email'/>
            <input className='dataInput' value={user.phone} onChange={(e)=>{values(e)}} required name='phone' type="phone" placeholder='Phone Number'/>
            <div className="dataButton">
                <Link to="/" className='backButton'>Back</Link>
                <button onClick={(e)=>{onSubmit(e)}} className='backButton'>Update</button>
            </div>
        </div>
    </div>
  )
}

export default Update