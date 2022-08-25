import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './Category.css';
function Category() {
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
      if (!response.error) {
        setData(response.category);
      }
    });
  };
  return (
    <div className=''>
      {/* <span class="loader"></span> */}
      <div className={show ? 'loader' : 'loader hide'}></div>
      <ul class="breadcrumb">
        <li><Link to="/">Home</Link></li>
        <li>Category</li>
      </ul>
      <table>
        <colgroup>
          <col style={{ width: 50 }} />
          <col />
          <col />
          <col style={{ width: 80 }} />
          <col style={{ width: 231 }} />
        </colgroup>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>NO</th>
            <th>NAME</th>
            <th>IMAGE</th>
            <th style={{ textAlign: 'center' }}>STATUS</th>
            <th style={{ textAlign: 'center' }}>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.map((a, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: 'center' }}>{i + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.image}</td>
                  <td style={{ textAlign: 'center' }}>{a.status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <button className='button button2'>UPDATE</button>
                    <button className='button button3'>DELETE</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colspan='5' style={{ textAlign: 'center',color:"red" }}>
                Something wrong !
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default Category;
