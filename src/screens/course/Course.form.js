import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '../../service/service';
import LoadingB from '../../compoments/loadings/loadingB/LoadingB';
import Breadcrumb from '../../compoments/breadcrumb/Breadcrumb';
import Form from '../../compoments/form/Form';
function CourseForm() {
  let param = useParams();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    await service('POST', '/api/course', data).then(function (response) {
      setLoading(false);
      console.log(response);
      if (!response.err) {
        alert('Add Succes !');
      } else {
        alert('Add Faild !');
      }
    });
  };
  const getCategory = async (event, user) => {
    setLoading(true);
    await service('get', '/api/category', {}).then(function (response) {
      setLoading(false);
      console.log(response);
      if (!response.error) {
        if (response && response.list) {
          setCategory(response.list);
        }
      } else {
        alert('Request category faild !');
      }
    });
  };
  const UpdateCourse = async () => {
    setLoading(true);
    await service('PUTH', '/api/course', {
      course_id: param.course_id,
    }).then(function (response) {
      setLoading(false);
      console.log(response);
      if (!response.err) {
        if (response.code !== 'ERR_NETWORK') {
          alert('Update Succes !');
        } else {
          alert('Server Error !');
        }
      } else {
        alert('Update Faild !');
      }
    });
  };
  var inputdata = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'name',
      onChange: (e) => handleValueChanges(e),
    },
    {
      type: 'select',
      name: 'category_id',
      onChange: (e) => handleValueChanges(e),
    },
    {
      type: 'number',
      name: 'full_price',
      placeholder: 'pirce',
      onChange: (e) => handleValueChanges(e),
    },
  ];
  return (
    <div>
      <LoadingB show={loading} />
      <Breadcrumb stepTitle='COURSE' buttonTitle=' / COURSE FORM' />
      <Form
        style={{ padding: 30, border: '1px solid #ddd' }}
        InputData={inputdata}
        buttonTitle={param && param.course_id ? 'UPDATE' : 'ADD NEW'}
        Category={category}
        onClick={
          param && param.course_id ? () => UpdateCourse() : () => AddCourse()
        }
      />
    </div>
  );
}
export default CourseForm;
