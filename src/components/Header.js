import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>  <Navbar className="nav">
    <Container>
   <Link to={"/"} style={{textDecoration:'none'}}>
        <Navbar.Brand href="#home" className='navhead'>
          <img
            alt=""
            src="https://i.postimg.cc/0jH7PbFg/unnamed-removebg-preview.png"
            width="60px"
            height="60px"
            className="d-inline-block align-top"
          />{' '}
         <span  className='span1 '>V</span><span2>iew</span2> <span className='span1'>H</span><span2>ub</span2>
        </Navbar.Brand>
   </Link>
    </Container>
  </Navbar>
</div>
  )
}

export default Header