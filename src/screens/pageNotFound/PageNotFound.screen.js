import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
function PageNotFound() {
  let navigate = useNavigate();
  return (
<div className='clouds'>
  <div className='c'>
        <div className='_404'>404</div>
        <hr/>
        <div className='_1'>THE PAGE</div>
        <div className='_2'>WAS NOT FOUND</div>
        <a className='btn' href='#none' onClick={navigate('/')}>BACK TO HOME</a>
    </div>
</div>
);
}

export default PageNotFound;