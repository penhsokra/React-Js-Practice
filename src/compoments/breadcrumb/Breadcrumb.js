import { GREENBUTTON } from '../../util/button/button';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';
function Breadcrumb(props) {
  return (
    <div className='breadcrumb_wrap'>
      <ul className='breadcrumb'>
        <li>
          <Link to='/'>Home </Link>
        </li>
        <li> / {props.stepTitle}</li>
      </ul>
      {props.showRightBox ? (
        <div className='right_box'>
          <div className='searchBox'>
            <input
              type='text'
              placeholder='search...'
              onChange={props.onChangeInput}
            ></input>
            <GREENBUTTON
              title={props.buttonTitle}
              onClick={props.onClickButton}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Breadcrumb;
