import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Logo from './image/logo.png'
import { Container, Nav} from 'react-bootstrap';
import './header.css'
const Header=()=>{

    return<Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#FFFFFF', color:'#FA7C26'}}>
    <Container>
    <Navbar.Brand href="/">
    <img style={{width:113, height:75}} src={Logo} className="img-fluid imgs rounded-start d-flex m-auto" alt="..."/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"  className=" collapses">
     
      <div className="container w-100 d-flex justify-content-end">
                <ul className="link w-50 d-flex  justify-content-between py-3 ">
                <li>
                        <Link href="javascript:void(0)" to="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/blog"><a>Blog</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/contact"><a>Contact Us</a></Link>
                    </li>
                    <li>
                        <Link href="javascript:void(0)" to="/about"><a>About</a></Link>
                    </li>
                </ul>
                </div>
     
      {/* <Nav className=" w-75 d-flex flex-end py-3 justify-space-between"> */}
        {/* <Nav.Link href="/" className="navlink" >Home</Nav.Link>
        <Nav.Link eventKey={2} href="/blog" className="navlink">
          Blog
        </Nav.Link>
        <Nav.Link href="/contact" className="navlink">Contact</Nav.Link>
        <Nav.Link eventKey={2} href="/about" className="navlink">
          About Us
        </Nav.Link>
      {/* </Nav> */}
    </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header