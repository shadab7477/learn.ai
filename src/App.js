import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import Useai from './Use-ai'
import Nav1 from './Navbar'
import "./index.css"
const app=()=>{
  return(
<>

{/* <Nav1/> */}

<Routes>
  <Route path="/" element={<Home/>}  />
  <Route path="/Contact" element={<Contact/>}  />
  <Route path="/Useai" element={<Useai/>}  />

</Routes>
</>

  )
}
export default app;