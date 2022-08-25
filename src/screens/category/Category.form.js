import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function CategoryForm() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    name: '',
    image: '',
    price: '',
    status: 1,
  });
  const handleValueChanges = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const AddCategory = async (event, user) => {
    setShow(true);
    await service('POST', '/api/category', data).then(function (response) {
      setShow(false);
      console.log(response);
      if (!response.error) {
        alert('Add Succes !');
      } else {
        alert('Add Faild !');
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
        <li>CATEGORY FORM</li>
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
            <input
              type='text'
              name='image'
              placeholder='image url'
              onChange={(e) => handleValueChanges(e)}
            />
          </div>
        </div>
        <div className='row'>
          <input type='submit' value='Submit' onClick={() => AddCategory()} />
        </div>
      </div>
    </div>
  );
}

export default CategoryForm;
