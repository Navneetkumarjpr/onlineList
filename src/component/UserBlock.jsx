import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {MdOutlineMailOutline,MdDeleteForever} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
const UserBlock = ({item,fetchResult}) => {
  const deleteContact=async(e,id)=>{
    e.preventDefault();
    await axios.delete(`http://localhost:8000/delete/${id}`)
    fetchResult();
}
  return (
    <div>
         <div className='detailBlock'>
        <div className="firstnameblock">
          <p>First Name :- </p>
          <p>{item.firstname} </p>
        </div>
        <div className="firstnameblock">
           <p>Last Name :-  </p>
           <p>{item.lastname}</p>
        </div>
        <div className="firstnameblock">
          <p>Email :-  </p>
          <p>{item.email}</p>
        </div>
        <div className="firstnameblock">
          <p>Phone Number :-  </p>
          <p>{item.phone}</p>
        </div>
        <div className="deleteUpdate">
          <Link to={`/update/${item._id}`} className='updateButton'>Update</Link>
          <button onClick={(e)=>{deleteContact(e,item._id)}} className='deleteButton'><MdDeleteForever/></button>
        </div>
        <div className="messageLink">
          <a href={`mailto:${item.email}`} target="_blank"><MdOutlineMailOutline/></a>
          <a href={`https://api.whatsapp.com/send?phone=${item.phone}`} target="_blank"><BsWhatsapp/></a>
        </div>
      </div>
    </div>
  )
}

export default UserBlock