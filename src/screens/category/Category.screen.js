import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate } from 'react-router-dom';
import LoadingB from '../../compoments/loadings/loadingB/LoadingB';
import { REDBUTTON, GREENBUTTON } from '../../util/button/button';
import Breadcrumb from '../../compoments/breadcrumb/Breadcrumb';
import Table from '../../compoments/table/Table';
import './Category.css';
function Category(props) {
  const col = [50, 'auto', 'auto', 100, 231];
  const tableHeader = ['ID', 'NAME', 'IMAGE', 'STATUS', 'ACTION'];
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
        if (response && response.list) {
          setData(response.list);
        } else {
          setData(false);
        }
      }
    });
  };
  const deleteCourse = async (event, category_id) => {
    let text = 'Do you want to delete this record ?';
    if (window.confirm(text) === true) {
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
      <LoadingB show={loading} />
      <Breadcrumb
        stepTitle='CATEGORY'
        buttonTitle='ADD NEW'
        showRightBox={true}
        onChangeInput={() => alert('on change...')}
        onClickButton={(e) => navegate('/category-form')}
      />
      <Table
        className='tblCategory'
        ColWidth={col}
        tableHeader={tableHeader}
        tableBody={
          data ? (
            data.map((a, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: 'center' }}>{i + 1}</td>
                  <td>{a.name}</td>
                  <td>{a.image}</td>
                  <td style={{ textAlign: 'center' }}>{a.status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <GREENBUTTON
                      title='UPDATE'
                      onClick={(e) => navegate('/category-form')}
                    />
                    <REDBUTTON
                      title='DELETE'
                      onClick={(e) => deleteCourse(e, a.category_id)}
                    />
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
          )
        }
      />
    </div>
  );
}
export default Category;
