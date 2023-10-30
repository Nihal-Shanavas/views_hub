import { commonRequest } from "./commonRequest";
import { baseUrl } from "./baseurl";



// add video api

export const addVideo=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}


// get all videos api
export const getAllVideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

//delete single video api
export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

// add category api

export const addCategory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}

// get all categories api
 
export const getAllCat=async()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}

// get all vidoes in a category api
export const getAllVideosInCat=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/categories/${id}`,{})
}

// category delete api

export const deleteCat= async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
  }

  // add history

  export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
  }

  // get all history

  export const getAllHistory=async()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
  }

  // delete history
  export const deleteHist= async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
  }

// drag and drop api

// access single video

export const getVideo=async(id)=>{
  return await commonRequest('GET',`${baseUrl}/videos/${id}` )
}

// delete single video from category

export const deleteSingleCat= async(id)=>{
  return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}
// update category

export const updateCategory=async(id,body)=>{
  return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}