import React,{useState,useEffect} from 'react';
import data from './Data.json'
import axios from 'axios'
import {Link} from 'react-router-dom'

const  Education=(props)=>{
 const [posts,setPosts] = useState({})
   useEffect(()=>
   { axios.get('./Data.json')
       .then(res=>{
      console.log(res)

      setPosts(res.data)})

      })
   
   console.log(data.educationalqualification)

    return (
     <div className="edu">
    	<div className="table"> 
      <h1>Education Details</h1>
    	<thead>
      
      <tr>
      <th  scope="col">#</th>
      <th  scope="col"> Institute</th>
      <th  scope="col"> Degree</th>
      <th  scope="col">Passoutyear</th>
      <th scope="col">Percentage</th>
     </tr>
    	</thead>
      <tbody>
    { data.educationalqualification.map((post) =>(
       <tr key={post.sno} >
         <th  scope="row">{post.sno}</th>
         <th> {post.institute}</th>
         <th>{post.degree} </th>
         <th>{post.passoutyear}</th>
         <th>{post.percentage}</th>
       </tr>
     ))}
      </tbody>
    	</div>
      </div>
    	)
}
export default Education