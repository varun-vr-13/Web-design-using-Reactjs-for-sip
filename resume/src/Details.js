import React,{useState,useEffect} from 'react';
import data from './Data.json'
import axios from 'axios'
import {Link} from 'react-router-dom'
import var1 from './var1.jpg'
const  Details=(props)=>{
 const [posts,setPosts] = useState({})
   useEffect(()=>
   { axios.get('./Data.json')
       .then(res=>{
      console.log(res)
      setPosts(res.data)})

      })
   
   console.log(data.details)
   return(
    <div className="details">
     <div className="card"> 
     <div className="card-body">
     <img src={var1} />
     <p title="name">{data.details.name}</p>
     <a  href='mailto:doddivarun13@gmail.com'><p title="Mail">{data.details.email}</p> </a>
      <a href to='tel:9389098390'> <p title="phone number">{data.details.number}</p></a>
        <p title="address">{data.details.address}</p>
     </div>
    </div>
    </div>
   )
  
   }

export default Details