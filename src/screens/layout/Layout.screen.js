import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Layout.css';
const img = require('../../assets/img/girl.jpg');

function Layout() {
  let navigate = useNavigate();
  const [isLogin, setIslogin] = useState(localStorage.getItem('islogin'));
  const [resMassage, setResMessage] = useState('');
  const [themeTitle, setThemeTitle] = useState('PINK MODE THEME');
  const [themeId, setThemeId] = useState('pinkMod');
  useEffect(() => {
    if (!isLogin) {
      navigate('/auth');
    }
  }, []);
  const themHandler = (e) => {
    setThemeTitle(e.target.title);
    setThemeId(e.target.id);
  };
  return (
    <div>
      <div className={'layout ' + themeId}>
        <header className='header'>
          <div className='heaer_inner'>
            <h2 className='tit_h2'>{themeTitle}</h2>
            <div className='profile'>
              <a
                href='#none'
                onClick={() => {
                  localStorage.clear();
                  navigate('/auth');
                }}
              ></a>
            </div>
          </div>
        </header>
        <nav className='aside_top'>
          <div className='our-team'>
            <div className='picture'>
              <img className='img-fluid' src={img} />
            </div>
            <div className='team-content'>
              <h3 className='name'>Admin</h3>
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
        <nav className='aside_bottom'>
          <div className='themControll'>
            <a
              href='#none'
              title='DARK MODE'
              onClick={(e) => themHandler(e)}
              id='darkMod'
            ></a>
            <a
              href='#none'
              title='LIGHT MODE'
              id='lightMod'
              onClick={(e) => themHandler(e)}
            ></a>
            <a
              href='#none'
              title='PINK MODE'
              id='pinkMod'
              onClick={(e) => themHandler(e)}
            ></a>
          </div>
        </nav>
        <main className='content'>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
