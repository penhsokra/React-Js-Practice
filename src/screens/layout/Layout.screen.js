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
        <div className='header'>
          <div className='heaer_inner'>
            <h2 className='tit_h2'>SCHOOL MANAGEMENT</h2>
            <div className='profile'><a href='#none' onClick={()=>{localStorage.clear();navigate('/auth')}}></a></div>
          </div>
        </div>
        <div className='nav'>
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
            </div>
            <div className="team-content">
              <h3 className="name">Admin</h3>
            </div>
          </div>
          <ul>
          <li>
              <Link to='/category'>CATEGORY</Link>
            </li>
            <li>
              <Link to='/course'>COURSE</Link>
            </li>
          </ul>
        </div>
        <div className='conten'>
           <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
