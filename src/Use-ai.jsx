import React from "react"
import Nav1 from "./Navbar";
import Sdata from "./sdata";
import Card from "./card";
const Useai=()=>{
    return(
<>
<div id="sk2" className="maindiv" > 
<Nav1/>
<div style={{paddingTop:"200px"}} >
<nav id="chatgpt"  class=" pb-1 navbar navbar-light  justify-content-center bg-transparent">
  <div  class="container-fluid  text-center justify-content-center">
    <span id="maintext" style={{fontSize:'7vw'}} class="navbar-brand  mb-0 justify-content-center wow animate__animated animate__flipInX animate__delay-1s "> USE DIFFERENT TYPES OF AI?</span>
  </div>
</nav></div>
</div>


<div  className='container-fluid nav_bg ' >
<div className='row' >
    <div className='col-10 mx-auto ' > 
        <div id='servicemain' className='mt-1 mb-2'>
          {/* <h1 className='text-center'>OUR SERVICES</h1> */}
          <div className='row justify-content-around pb-5 mb-5 '>
    {Sdata.map((val,ind) => {
      return <Card key={ind}
      imgsrc={val.imgsrc}
      info={val.info}
      link={val.link}

      />
    } )}

</div>
        </div>
    </div>
</div>
</div>


</>

    )
}
export default Useai;