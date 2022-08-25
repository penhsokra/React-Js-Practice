import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Course.css';
function Course() {
  let navegate = new useNavigate();
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
        setData(response.list);
      }
    });
  };
  const deleteCourse = async (event, course_id) => {
    let text = 'Do you want to delete this record ?';
    if (window.confirm(text) == true) {
      setShow(true);
      await service('DELETE', '/api/course', { course_id: course_id }).then(
        function (response) {
          setShow(false);
          console.log(response);
          if (!response.error) {
            getCourse();
            alert('Delete Success !');
          } else {
            alert(response.message.sqlMessage);
          }
        }
      );
    }
  };
  return (
    <div className=''>
      {/* <span class="loader"></span> */}
      <div className={show ? 'loader' : 'loader hide'}></div>
      <ul className='breadcrumb'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>COURSE</li>
        <li style={{ flex: 1, textAlign: 'right' }}>
          <button
            className='button button2'
            onClick={() => navegate('/course-form')}
          >
            ADD NEW
          </button>
        </li>
      </ul>
      <table>
        <colgroup>
          <col style={{ width: 50 }} />
          <col />
          <col style={{ width: 120 }} />
          <col style={{ width: 120 }} />
          <col style={{ width: 231 }} />
        </colgroup>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>NO</th>
            <th>NAME</th>
            <th style={{ textAlign: 'center' }}>PRICE</th>
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
                  <td style={{ textAlign: 'center' }}>{a.full_price}</td>
                  <td style={{ textAlign: 'center' }}>{a.status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <button
                      className='button button2'
                      onClick={(e) => navegate('/course-form')}
                    >
                      UPDATE
                    </button>
                    <button
                      className='button button3'
                      onClick={(e) => deleteCourse(e, a.course_id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colspan='6' style={{ textAlign: 'center', color: 'red' }}>
                Something wrong !
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Course;
