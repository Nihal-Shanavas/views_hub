import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Add from '../components/Add';
import View from '../components/View';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

function Home() {
  // state for statelifting
  const [addUpdate, setAddUpdate] = useState({})
  return (
    <div className='mt-5'>
      <Row>
        <Col>
          <h1 className='ms-3 ps-5 mb-4 start' >Explore endless videos, absolutely free!</h1>
          <div>
            <Link style={{ textDecoration: 'none' }} to={'/watch-history'}>
              <a className='mb-5 ms-2 fs-3 ps-5 start ' style={{ textDecoration: 'none' }} >
                <i className="fa-regular fa-clock fa-spin" style={{ color: '#B49A67' }}></i>
                Check Watch History
              </a>
            </Link>
          </div>
        </Col>
        <Col className='text-center'>
          <img className='ms-2 mb-5 ' style={{ width: '300px', height: '300px' }} src="https://i.postimg.cc/LsJC7Q4D/png-transparent-black-video-logo-video-icon-video-icon-angle-white-text-thumbnail-removebg-preview.png" alt="" />
        </Col>
      </Row>
      <Row className='p-5 '>
        <Col lg={1}>
          <Add update={setAddUpdate}></Add>
        </Col>
        <Col lg={8}> 
          <View updatedState={addUpdate}></View>
        </Col>
        <Col lg={3} md={4} sm={12}> 
          <Categories></Categories>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
