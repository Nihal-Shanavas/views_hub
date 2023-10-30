import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import uniqid from "uniqid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addCategory,
  deleteCat,
  getAllCat,
  getVideo,
  updateCategory,
} from "../services/allapis";
import { Trash } from "react-feather";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function Categories() {
  // state to hold input, id, and video array
  const [catInputs, setCatInputs] = useState({
    id: "",
    name: "",
    videos: [],
  });
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs = (e) => {
    const { value, name } = e.target;
    setCatInputs({ ...catInputs, [name]: value });
  };

  const addData = async () => {
    let id = uniqid();
    setCatInputs({ ...catInputs, id: id });
    const { name } = catInputs;
    if (name === "") {
      toast.error("Add caption in input", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      // api call
      const result = await addCategory(catInputs);
      if (result.status >= 200 && result.status < 300) {
        setShow(false);
        getAllCategories();

        toast.success(`${result.data.name} added`, {
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
    }
  };

  const getAllCategories = async () => {
    const result = await getAllCat();
    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data);
    }
  };

  const removeCategory = async (id) => {
    const result = await deleteCat(id);
    if (result.status >= 200 && result.status < 300) {
      // refresh category list
      getAllCategories();
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  const DragOver = (e) => {
    e.preventDefault();
    console.log("dragged this video over the category");
  };
  const dropped = async (e, id) => {
    console.log("dropped ... cat Id -" + id);
    // video id access
    const videoId = e.dataTransfer.getData("cardId");
    console.log(videoId);

    // access video data from backend
    const { data } = await getVideo(videoId);
    console.log(data);

    // select dropped category from all categories
    const selectedCategory = categories.find((i) => i.id == id);
    console.log(selectedCategory);

    // update category object with video data
    selectedCategory.videos.push(data);
    console.log(selectedCategory);

    // api call to update the changed category in backend
    await updateCategory(id, selectedCategory);
    getAllCategories();
  };
  return (
    <div>
      <Button className="ms-1 mb-5 w-100 cate" onClick={handleShow}>
        Categories
      </Button>

      <ListGroup className="ms-1">
        {categories.length > 0 ? (
          categories.map((category) => (
            <ListGroup.Item
              style={{ marginBottom: "30px", backgroundColor: "#B49A67" }}
              key={category.id}
              className="custom-list-item thumb-cursor"
            >
              <div
                droppable
                onDragOver={(e) => DragOver(e)}
                onDrop={(e) => dropped(e, category?.id)}
                className="d-flex align-content-center justify-content-between"
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/single-view/${category.id}`}
                >
                  <span className="fs-3 caption me-5">{category.name}</span>
                </Link>
                <button
                  className="btn btn-sm"
                  style={{ borderRadius: "50%" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCategory(category.id);
                  }}
                >
                  <Trash size={20} style={{color:'#112336'}} className="  trash-icon" />
                </button>
              </div>
              <div className="images ms-1 ">
                {category.videos.map((j) => (
                  <div key={j.id}>
                    <img
                      className="mb-2 ms-2 me-1 mt-3"
                      style={{ height: "70px", width: "70px", float: "left" }}
                      src={j.cover_image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>No Categories Added</ListGroup.Item>
        )}
      </ListGroup>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:'#B49A67'}} closeButton>
          <Modal.Title  style={{backgroundColor:'#B49A67',color:'black'}}>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{backgroundColor:'#B49A67'}}>
          <FloatingLabel
            controlId="floatingInput1"
            label="Add Category"
            className="text-dark mb-3"
          >
            <Form.Control
              onChange={(e) => setInputs(e)}
              name="name"
              id="catId"
              type="text"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer  style={{backgroundColor:'#B49A67'}}>
          <Button style={{boxShadow:'1px 1px 1px 1px #B49A67 ',color:'black'}} className="ms-5" onClick={handleClose}>
            Close
          </Button>
          <Button style={{boxShadow:'1px 1px 1px 1px #B49A67 ',color:'black'}} className="ms-5" onClick={addData}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  );
}

export default Categories;
