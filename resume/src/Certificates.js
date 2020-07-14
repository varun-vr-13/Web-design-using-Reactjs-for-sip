import React,{useState,useEffect} from 'react';
import data from './Data'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Certificates=() =>{

    return(
    <div className="cert">
     <div className="card">
     <div className="card-body">
     <ul>
       { data.certificates.map((da=>(
           <li  key={da.id}>{da.dat} </li>
       )))
       }
      </ul>
     </div>
   </div>
    </div>
    );
 
 };
export default Certificates;