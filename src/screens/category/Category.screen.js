import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate, Link } from 'react-router-dom';
import LoadingB from '../../compoments/loadings/loadingB/LoadingB';
import {REDBUTTON,GREENBUTTON} from '../../util/button/button';
import axios from 'axios';
import './Category.css';
function Category(props) {
  let navegate = new useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async (event, user) => {
    setLoading(true);
    await service('GET', '/api/category', {}).then(function (response) {
      setLoading(false);
      console.log(response);
      if (!response.error) {
        setData(response.list);
      }
    });
  };
  const deleteCourse = async (event, category_id) => {
    let text = 'Do you want to delete this record ?';
    if (window.confirm(text) == true) {
      setLoading(true);
      await service('DELETE', '/api/category', {
        category_id: category_id,
      }).then(function (response) {
        setLoading(false);
        console.log(response);
        if (!response.error) {
          getCourse();
          alert('Delete Success !');
        } else {
          alert(response.message.sqlMessage);
        }
      });
    }
  };
  return (
    <div className=''>
      <LoadingB show={loading}/>
      <ul className='breadcrumb'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>CATEGORY</li>
        <li style={{ flex: 1, textAlign: 'right' }}>
          <GREENBUTTON title="ADD NEW" onClick={(e) => navegate('/category-form')}/>
        </li>
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
                    <GREENBUTTON title="UPDATE" onClick={(e) => navegate('/category-form')}/>
                    <REDBUTTON title="DELETE" onClick={(e) => deleteCourse(e, a.category_id)}/>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colspan='5' style={{ textAlign: 'center', color: 'red' }}>
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
