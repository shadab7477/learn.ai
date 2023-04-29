import React from 'react'
import './home.css'
const Card = (props) => {
  return (
    <div id='cards4'   className=" bg-transparent card   justify-content-center " style={{width:"18rem",marginTop:'150px'}}>
   <div style={{height:"80px"}} > <img  className="card-img-top  text-center"  src={props.imgsrc} alt="Card image cap"/></div>
  <div className="card-body">
    <p id='mainbrand' style={{height:"140px"}} className="card-title text-light justify-content-center text-center">{props.info}</p>
    <a id='cards2'  href={props.link}>    <button id='cards3' type="button" class="btn btn-primary justify-content-center w-100 ">  USE AI </button> </a>
    
  </div>
</div>
  )
}

export default Card