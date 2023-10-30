import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCat, getAllVideosInCat, updateCategory } from '../services/allapis';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SingleView() {
  const params=useParams();
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchVideos = async( ) => {
    const {data} = await getAllVideosInCat(params.id);

    setVideos(data.videos);

    console.log(data.videos)
  }

  const removeVidoeFromCat = async (id) => {
    const selectedCategory = categories.find(i=>i.id==params.id);
    console.log(selectedCategory)

    // update category object with video data
    selectedCategory.videos = selectedCategory.videos.filter((v) => v.id !== id);

    await updateCategory(params.id,selectedCategory);

    fetchVideos();
    getAllCategories();
  }

  const getAllCategories = async () => {
    const result = await getAllCat();
    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data);
    }
  }

  useEffect(() => {
    fetchVideos();
    getAllCategories();
  }, [])
  
  
  return (
    <div d-block>
<Link to={'/home'}>
                <button style={{ border: '1px solid #112336', boxShadow: '2px 2px 2px 2px black' }} className='ms-5 mt-5 start fs-3 mb-5'>Back Home</button>
  
</Link>
      <h2>
        <span className=' ms-5 mt-1 start '>{categories.find((i) => i.id == params.id)?.name}</span>
      </h2>
    <div className='d-flex'>
      


      {
        videos.map(video =>  <Card className='mb-5 ms-4 mt-5' style={{ width: '18rem' }}>
        <Card.Img cl variant="top" src={video.cover_image} />
        <Card.Body className='cardbody'>
          <Card.Title style={{color:'white'}}>{video.caption}</Card.Title>
          <Card.Text>
          
          </Card.Text>
          <Button onClick={() => removeVidoeFromCat(video.id)} className='trash'>
  <i class="fa-solid fa-trash-can fs-3 trash2" style={{color:'#112336 '}}> </i>
</Button>

        </Card.Body>
      </Card>
        
        
        )
      }
      </div>
      
    </div>
  )
}

export default SingleView