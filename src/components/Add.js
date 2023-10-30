import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({update}) {
  // state to hold input datas
  const [inputs, setInputs] = useState({
    id: "",
    caption: "",
    cover_image: "",
    video_url: ""
  })

  // function for onChange
  const setValues = (e) => {
    let { value, name } = e.target
    // console.log(value,name);
    setInputs({ ...inputs, [name]: value })
  }

// Function to extract video URL
const extractUrl = (e) => {
  let videoUrl = e.target.value;
  console.log(videoUrl); // Check the entered URL
  if (videoUrl.includes("v=")) {
    let subUrl = videoUrl.split("v=")[1];
    console.log(subUrl); // Check the extracted subUrl
    let finalUrl = `https://www.youtube.com/embed/${subUrl}?autoplay=1`;
    console.log(finalUrl); // Check the final URL
    setInputs({ ...inputs, ["video_url"]: finalUrl });
  }
};






// function to add button click
const addHandle = async (e) => {
  e.preventDefault()
  let id = uniqid()
  // console.log(id);
  setInputs({ ...inputs, ["id"]: id })
  const {caption,cover_image,video_url}=inputs
  if(caption=="" || cover_image=="" || video_url==""){
    toast.error("empty fields!!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }
  else{
    const result = await addVideo(inputs)
  console.log(result);
  if (result.status >= 200 && result.status < 300) {

    // update state of home
    update(result.data)
    toast.success("video added", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    setShow(false)
  }
  }
  
  
}
console.log(inputs);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
  <div>
    <i onClick={handleShow} class="fa-solid fa-arrow-up-from-bracket fa-beat text-info"></i>

    <Modal  show={show} onHide={handleClose} >
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title><h1 style={{color:'black'}}>Upload Video</h1></Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body">
        <FloatingLabel
          controlId="floatingInput"
          label="Video Caption"
          className="mb-3 mt-3 text-dark"
        >
          <Form.Control name='caption' onChange={(e) => setValues(e)} type="text" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput1"
          label="Cover Image URL"
          className='text-dark mb-3'>
          <Form.Control name='cover_image' onChange={(e) => setValues(e)} type="text" />
        </FloatingLabel>
        <FloatingLabel
  controlId="floatingInput2"
  label="YouTube Video URL"
  className='text-dark'
>
  <Form.Control name='video_url' onChange={(e) => extractUrl(e)} type="text" />
</FloatingLabel>
      </Modal.Body>
      <Modal.Footer style={{backgroundColor:'#B49A67'}} className="custom-modal-footer ">
        <Button style={{boxShadow:'1px 1px 1px 1px #B49A67 ',color:'black'}} variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={{boxShadow:'1px 1px 1px 1px #B49A67 ',color:'black'}} variant="primary" onClick={addHandle}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer />
  </div>
)
}


export default Add