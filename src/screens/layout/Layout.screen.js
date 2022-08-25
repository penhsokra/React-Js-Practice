import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './Layout.css';
function Layout() {
  return (
    <div>
      <div className='grid-container'>
        <div className='item1'>
          <div className='heaer_inner'>
            <h2 className='tit_h2'>SCHOOL MANAGEMENT</h2>
            <div className='profile'></div>
          </div>
        </div>
        <div className='item2'>
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
