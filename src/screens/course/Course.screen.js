import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Course.css';
function Course() {
  const [show, setShow] = useState(false);


  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = (event, user) => {
    setShow(true);
    event.preventDefault();
    setLoginMessage('');
    service('POST', '/api/course', {}).then(function (response) {
      setShow(false);
      console.log(response.message);
      if (response.error) {

      } else {

      }
    });
  };
  return (
    <div className='auth_wrap'>
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
      <thead>
        <tr>
          <th>CODE</th>
          <th>STOCK</th>
          <th>CAP</th>
          <th>INCH</th>
          <th>BOX TYPE</th>
        </tr>
      <thead>
      <tbody>
        <tr>
          <td>CES-9000</td>
          <td>50mt</td>
          <td>9mm</td>
          <td>1/2"</td>
          <td>Kangal / Coil</td>
          </tr>
      </tbody>
    <table/>

    </div>
  );
}

export default Course;
