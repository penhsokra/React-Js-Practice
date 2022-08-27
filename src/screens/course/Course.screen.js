import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import service from '../../service/service';
import { REDBUTTON, GREENBUTTON } from '../../util/button/button';
import Breadcrumb from '../../compoments/breadcrumb/Breadcrumb';
import LoadingB from '../../compoments/loadings/loadingB/LoadingB';
import Table from '../../compoments/table/Table';
import './Course.css';
function Course() {
  const col = [50, 'auto', 100, 100, 231];
  const tableHeader = ['ID', 'NAME', 'PRICE', 'STATUS', 'ACTION'];
  let navegate = new useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async (event, user) => {
    setLoading(true);
    await service('GET', '/api/course', {}).then(function (response) {
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
  const deleteCourse = async (event, course_id) => {
    let text = 'Do you want to delete this record ?';
    if (window.confirm(text) === true) {
      setLoading(true);
      await service('DELETE', '/api/course', { course_id: course_id }).then(
        function (response) {
          setLoading(false);
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
      <LoadingB show={loading} />
      <Breadcrumb
        stepTitle='COURSE'
        buttonTitle='ADD NEW'
        showRightBox={true}
        onChangeInput={() => alert('on change...')}
        onClickButton={(e) => navegate('/course-form')}
      />
      <Table
        className='tblCourse'
        ColWidth={col}
        tableHeader={tableHeader}
        tableBody={
          data ? (
            data.map((a, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: 'center' }}>{i + 1}</td>
                  <td>{a.name}</td>
                  <td style={{ textAlign: 'center' }}>{a.full_price}</td>
                  <td style={{ textAlign: 'center' }}>{a.status}</td>
                  <td style={{ textAlign: 'center' }}>
                    <GREENBUTTON
                      title='UPDATE'
                      onClick={(e) => navegate('/course-form')}
                    />
                    <REDBUTTON
                      title='DELETE'
                      onClick={(e) => deleteCourse(e, a.course_id)}
                    />
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
          )
        }
      />
    </div>
  );
}

export default Course;
