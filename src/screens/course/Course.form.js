import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function CourseForm() {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);
  const [data, setData] = useState({
    name: '',
    category_id: '',
    full_price: '',
    status: 1,
  });
  const handleValueChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  useEffect(() => {
    getCategory();
  }, []);
  const AddCourse = async (event, user) => {
    setShow(true);
    await service('POST', '/api/course', data).then(function (response) {
      setShow(false);
      console.log(response);
      if (!response.err) {
        alert('Add Succes !');
      } else {
        alert('Add Faild !');
      }
    });
  };
  const getCategory = async (event, user) => {
    setShow(true);
    await service('get', '/api/category', {}).then(function (response) {
      setShow(false);
      console.log(response);
      if (!response.error) {
        setCategory(response.list);
      } else {
        alert('Request category faild !');
      }
    });
  };
  return (
    <div>
      <div className={show ? 'loader' : 'loader hide'}></div>
      <ul className='breadcrumb'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>COURSE FORM</li>
      </ul>
      <div className='' style={{ padding: 30, border: '1px solid #ddd' }}>
        <div className='row'>
          <div className='col-75'>
            <input
              type='text'
              name='name'
              placeholder='name'
              onChange={(e) => handleValueChanges(e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <select name='category_id' onChange={(e) => handleValueChanges(e)}>
              <option>Select category</option>
              {category.map((a, i) => {
                return (
                  <option key={i} value={a.category_id}>
                    {a.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='col-75'>
            <input
              type='text'
              name='full_price'
              placeholder='price'
              onChange={(e) => handleValueChanges(e)}
            />
          </div>
        </div>
        <div className='row'>
          <input type='submit' value='Submit' onClick={() => AddCourse()} />
        </div>
      </div>
    </div>
  );
}

export default CourseForm;
