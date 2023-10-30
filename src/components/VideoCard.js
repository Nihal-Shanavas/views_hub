import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import format from 'date-fns/format';



function VideoCard({video,deleteUpdate}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async () => {
      setShow(true);
      // body

      //id
    var id=uniqid()

      //title
      var video_title=video.caption

      //url

      var url=video.video_url
      //date

      var date= format(new Date(),'yyyy-MM-dd h:mm:ss a')
      
      const body={id,video_title,url,date}
      if(body){
      // api call
      const result=await addHistory(body)
      console.log(result);
      }

    
    
    }

    const handleDelete=async(id)=>{
      const result=await deleteVideo(id)
      if(result.status>=200 && result.status<300){
       deleteUpdate(result.data)
      }
    }
    const dragStart=(e,id)=>{
      console.log("drag started  ...  source card id-"+id);
      // store dragged data
      e.dataTransfer.setData("cardID",id)
    }
  return (
    <div>
       

      <Card draggable onDragStart={(e)=>dragStart(e,video.id)} style={{width:'250px'}} className=' cardimg2 mb-5 '>
      <div className="card-image-wrapper">
      <Card.Img className='cardimg3' variant="top" src={video.cover_image}  onClick={handleShow} />
      </div>
      <Card.Body className='cardbody' >
        <Card.Text className='cap' style={{color:'white'}}>
          {video.caption}
        </Card.Text>
        <Button onClick={()=>handleDelete(video.id)} className='trash'  >
        <i class="fa-solid fa-trash-can fs-3 trash2 me-2" style={{color:'#112336 '}}></i>
        </Button>
      </Card.Body>
    </Card>






      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe 
            width="100%" 
            height="300" 
            src={video.video_url} title="Tamil x Malayalam Lofi songs ~ malayalam cover songs ~ tamil cover songs ~ malayalam lofi.tamil lofi" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          
        </Modal.Footer>
      </Modal>
    </div>




  )
}

export default VideoCard
