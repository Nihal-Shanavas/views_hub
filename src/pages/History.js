import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHist, getAllHistory } from '../services/allapis';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function History() {
  const [histories, setHistories] = useState([]);

  const getHistories = async () => {
    const { data } = await getAllHistory();
    setHistories(data);
  }

  const removeHistory = async (id) => {
    const result = await deleteHist(id);
    if (result.status >= 200 && result.status < 300) {
      // Refresh history list
      getHistories()
    }
  }

  useEffect(() => {
    getHistories();
  }, []);

  return (
    <div>
<Link to={'/home'}>
        <button style={{ border: '1px solid #112336', boxShadow: '2px 2px 2px 2px black' }} className='ms-5 mt-5 start fs-3'>Back Home</button>
  
</Link>      <h1 className='start text-center me-5 mt-4 mb-5'>Watch History</h1>
<h3 className='text-center start fs-5'>Swipe to left<i style={{color:'#B49A67'}} class="fa-solid fa-angles-left"></i></h3>
      {histories.length > 0 ? (
        <div className='table-responsive'>
          <Table className='w-100 container pb-5 mb-5 mt-1' striped bordered hover>
            <thead  className='text-center fs-4 start '>
              <tr>
                <th className='tb1'>#</th>
                <th className='tb1'>Date</th>
                <th className='tb1'>Title</th>
                <th className='tb1'>Video URL</th>
                <th className='tb1'></th>
              </tr>
            </thead>
            <tbody className='tb1'>
              {
                histories.map((i, index) => (
                  <tr key={i.id} className='text-center fs-5'>
                    <td className='tb1'>{index + 1}</td>
                    <td className='tb1'>{i.date}</td>
                    <td className='tb1'>{i.video_title}</td>
                    <td className='tb1'>{i.url}</td>
                    <td   className='text-center tb1'>
                      <Trash2 onClick={() => removeHistory(i.id)} className='btn' size={70} style={{ color: '#112336' }} />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>
      ) : (
        <h2 className='text-center p-5 text-warning'>No Watch Histories</h2>
      )}
    </div>
  );
}

export default History;