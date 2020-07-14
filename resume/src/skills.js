import React,{useState,useEffect} from 'react';
import data from './Data.json'
import axios from 'axios'
import {Link} from 'react-router-dom'
let Skills=()=>
{  return(
  <div class="skill">
<div  class="accordion" id="accordionExample">
<div class="card crd1">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Technical Skills
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <ul>
  {  
   data.technicalskills.map((skills)=>
      <h2>{skills.title}
      <li>{skills.info}</li> </h2> 
     
      ) 
  }
  </ul>
      </div>
    </div>
  </div>

  <div class="card crd2">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">

        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Hobbies
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      {data.hobies.map((dat)=>
<h2><li>{dat}</li></h2>)}
      </div>
    </div>
  </div>


</div>
 </div>
 );
}
export default Skills