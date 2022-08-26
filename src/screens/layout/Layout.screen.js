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
      <div className='layout'>
        <header className='header'>
          <div className='heaer_inner'>
            <h2 className='tit_h2'>xx</h2>
            <div className='profile'><a href='#none' onClick={()=>{localStorage.clear();navigate('/auth')}}></a></div>
          </div>
        </header>
        <nav className='aside_top'>
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
        </nav>
        <nav className='aside_bottom'></nav>
        <main className='content'>
           <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
