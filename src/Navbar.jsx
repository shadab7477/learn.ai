import React from "react";
import {NavLink} from "react-router-dom"
import './home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Nav1 =()=>{
   
   
   return(
<>
<Navbar className=" " style={{position:'fixed',width:'100%' }} id="nav1" bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand id='logo' className=' px-3 fs-3 w-5 text-light fw-bold' to="/"> <span  > LEARN.AI </span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cpu my-element mb-2" viewBox="0 0 16 16">
  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
</svg> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  text-light ">
            <NavLink id='link'  className='text-decoration-none text-light  px-3' to="/">HOME</NavLink>
         <a style={{textdecoration:'none'}}>   <NavLink id='link' style={{textdecoration:"none"}} className=' px-3 text-light  text-decoration-none'  to="/useai">USE AI</NavLink></a>
            
            <NavLink id='link' className=' px-3  text-decoration-none text-light' to="/contact">CONTACT</NavLink>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

</>

    )
}
export default Nav1;