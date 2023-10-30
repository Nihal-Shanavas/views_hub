import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      <div className='langingBody mb-5 mt-5'>
        <Container>
          <Row>
            <Col lg={6} md={12}>
            <img className='ms-2 mb-1 mt-5 ' style={{ width: '200px', height: '200px' }} src="https://i.postimg.cc/LsJC7Q4D/png-transparent-black-video-logo-video-icon-video-icon-angle-white-text-thumbnail-removebg-preview.png" alt="" />
            </Col>
            <Col lg={6} md={12} className=' mt-5 pt-5 para'>

              <h2 className='me-5'  style={{color:'white'}}><i class="fa-solid fa-play text-white"></i> play   <i class="fa-solid fa-tv text-white"></i> watch   <i class="fa-solid fa-repeat text-white"></i>   repeate </h2>
              
              <p  className='mt-5' style={{color:'white'}}>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint explicabo quasi facilis cupiditate accusantium nobis quisquam nesciunt voluptate sit, architecto saepe itaque ducimus reprehenderit officiis perferendis ipsam? Voluptas.  </p>
<Link to={'/home'}>
                <button style={{color:'white',border:'white 2px solid'}} className='btn1'>Get Started</button>
  
</Link>              </Col>


          </Row>
        </Container>
        </div>
        

        {/* <Container>
      <Row>
        <Col className='mt-5 mb-5'><Card style={{ width: '18rem',backgroundColor:'black' }}>
      <Card.Img variant="top" className='cardimg' src="https://i.postimg.cc/Z56Yvg4j/giphy.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Card Title</Card.Title>
        <Card.Text style={{color:'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bt3' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>

        <Col className='mt-5 mb-5'>
        <Card style={{ width: '18rem',backgroundColor:'black' }}>
      <Card.Img variant="top" className='cardimg' src="https://i.postimg.cc/vH094483/177bd383de152ab75e96c60a27c256eb.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Card Title</Card.Title>
        <Card.Text style={{color:'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bt3' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col className='mt-5 mb-5'>
        <Card style={{ width: '18rem' ,backgroundColor:'black'}}>
      <Card.Img variant="top" className='cardimg' src="https://i.postimg.cc/j2k95sD2/youtube-red-icon-78u4fsgfpf41nvsp.gif" />
      <Card.Body>
        <Card.Title style={{color:'white'}}>Card Title</Card.Title>
        <Card.Text style={{color:'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='bt3' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container> */}
      
      
    </div>
  )
}

export default LandingPage
