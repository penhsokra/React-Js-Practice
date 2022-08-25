import { useEffect, useState } from 'react';
import { Link,Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Layout.css';
function Layout() {
  let navigate = useNavigate();
  const [isLogin,setIslogin] = useState(localStorage.getItem("islogin"));
  useEffect(() => {
    if(!isLogin){
      navigate('/auth');
    }
  }, []);
  return (
    <div>
      <div className='grid-container'>
        <div className='item1'>
          <div className='heaer_inner'>
            <h2 className='tit_h2'>SCHOOL MANAGEMENT</h2>
            <div className='profile'><a href='#none' onClick={()=>{localStorage.clear();navigate('/auth')}}></a></div>
          </div>
        </div>
        <div className='item2'>
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
            </div>
            <div className="team-content">
              <h3 className="name">Michele Miller</h3>
              <h4 className="title">Web Developer</h4>
            </div>
          </div>
          <ul>
            <li>
              <Link to='/course'>COURSE</Link>
            </li>
            <li>
              <Link to='/category'>CATEGORY</Link>
            </li>
          </ul>
        </div>
        <div className='item3'>
           <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
