import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>

      <div  className='footer p-5 fixed-bottum'>
      <Container>
        <Row >
          <Col className='mt-1 p-5' lg={4} md={4} sm={12} >
          
            <img
              alt=""
              src="https://i.postimg.cc/0jH7PbFg/unnamed-removebg-preview.png"
              width="70px"
              height="70px"
              className="d-inline-block align-top"
            />{' '}
       <span  className='span1 '>V</span><span2>iew</span2> <span className='span1'>H</span><span2>ub</span2>


            <p className='ms-3 mt-2 footy1' style={{color:'black'}}>The easy way to create stunning videos, add subtitles and grow your audience.</p>

          </Col>



          <Col className=' p-5 footy1' lg={3} md={4} sm={12}>
  <h5 style={{ color: 'black' }} className='footerhead mt-5'>Links</h5>
<Link style={{textDecoration:'none'}}  to={'/home'}>
    <a  style={{ color: 'black' }} className='links '>Home</a><br />
  
</Link>
<Link style={{textDecoration:'none'}} to={'/'}>
    <a  style={{ color: 'black' }} className='links'>Landing Page</a><br />
  
</Link>
<Link style={{textDecoration:'none'}} to={'/watch-history'}>
    <a  style={{ color: 'black' }} className='links'>Watch History</a>
  
</Link>
</Col>



          


          <Col className='p-5 '  lg={5} md={4} sm={12}>

            <h5 style={{color:'black'}} className='mt-3 footerhead footy1'>Contact Us</h5>
              <input style={{backgroundColor:'#112336'}} type="email" placeholder='Enter Email'  className='form-control email hi '/><br />
              <textarea name="" style={{backgroundColor:'#112336'}} id="" placeholder='Message' className='form-control message hi '></textarea> <br />
              <button className='submit' style={{color:'#112336'}} >Submit</button> <br />
            <a href="" className='mt-5'><i className='face' class="fa-brands fa-facebook"></i>
              <i className='face' class="fa-brands fa-instagram"></i>
              <i className='face' class="fa-brands fa-x-twitter"></i></a>

          </Col>
        </Row>
      </Container>
    </div>
  </div>
  )
}

export default Footer
