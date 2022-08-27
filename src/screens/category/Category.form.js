import { useState } from 'react';
import { useParams } from 'react-router-dom';
import service from '../../service/service';
import LoadingB from '../../compoments/loadings/loadingB/LoadingB';
import Breadcrumb from '../../compoments/breadcrumb/Breadcrumb';
import Form from '../../compoments/form/Form';
function CategoryForm() {
  let param = useParams();
  const [loading, setLoading] = useState(false);
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

  const AddCategory = async () => {
    setLoading(true);
    await service('POST', '/api/category', data).then(function (response) {
      setLoading(false);
      console.log(response);
      if (!response.error) {
        alert('Add Succes !');
      } else {
        alert('Add Faild !');
      }
    });
  };
  const UpdateCategory = async () => {
    setLoading(true);
    await service('PUTH', '/api/category', {
      category_id: param.category_id,
    }).then(function (response) {
      setLoading(false);
      console.log(response);
      if (!response.error) {
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
      type: 'text',
      name: 'image',
      placeholder: 'image url',
      onChange: (e) => handleValueChanges(e),
    },
  ];
  return (
    <div>
      <LoadingB show={loading} />
      <Breadcrumb stepTitle='COURSE' buttonTitle=' / CATEGORY FORM' />
      <Form
        style={{ padding: 30, border: '1px solid #ddd' }}
        InputData={inputdata}
        buttonTitle={param && param.category_id ? 'UPDATE' : 'ADD NEW'}
        onClick={
          param && param.category_id
            ? () => UpdateCategory()
            : () => AddCategory()
        }
      />
    </div>
  );
}
export default CategoryForm;
