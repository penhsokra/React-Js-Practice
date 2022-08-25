import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Course.css';
function Course() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async (event, user) => {
    setShow(true);
    await service('GET', '/api/course', {}).then(function (response) {
      setShow(false);
      console.log(response);
      if(!response.error) {
        setData(response.category);
      }
    });
  };
  return (
    <div className=''>
      <div className={show ? 'loading' : 'loading hide'}>
        <svg width='100' height='100' viewBox='0 0 100 100'>
          <polyline
            className='line-cornered stroke-still'
            points='0,0 100,0 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
          <polyline
            className='line-cornered stroke-still'
            points='0,0 0,100 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
          <polyline
            className='line-cornered stroke-animation'
            points='0,0 100,0 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
          <polyline
            className='line-cornered stroke-animation'
            points='0,0 0,100 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
        </svg>
      </div>

    <table>
    <colgroup>
      <col style={{width:50}}/>
      <col/>
      <col/>
      <col/>
      <col style={{width:80}}/>
      <col style={{width:100}}/>
    </colgroup>
      <thead>
        <tr>
          <th>NO</th>
          <th>NAME</th>
          <th>PARENT</th>
          <th>IMAGE</th>
          <th>STATUS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((a,i)=>{
            return (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{a.name}</td>
                <td>{a.parent}</td>
                <td>{a.image}</td>
                <td>{a.status}</td>
                <td>xxxxx</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>

    </div>
  );
}

export default Course;
