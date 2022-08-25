import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
function AuthScreen() {
  let navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [show, setShow] = useState(false);
  const formControll = () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });
    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  };

  useEffect(() => {
    formControll();
  }, []);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleValueChanges = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };
  const login = (event, user) => {
    setShow(true);
    event.preventDefault();
    setLoginMessage('');
    service('POST', '/api/auth/login', user).then(function (response) {
      setShow(false);
      console.log(response.message);
      if (response.error) {
        var text = '';
        if (response.message.username || response.message.password) {
          text += response.message.username
            ? response.message.username + ' ! '
            : '';
          text += response.message.password ? response.message.password : '';
        } else {
          text += response.message ? response.message : '';
        }
        setLoginMessage(text);
      } else {
        navigate('/home');
      }
    });
  };
  const register = (e) => {
    e.preventDefault();
    alert('Route not found');
    setRegisterMessage('Route not found !');
    service('GET', '/api/auth/register', {}).then(function (response) {
      console.log(response);
    });
  };
  return (
    <div className='auth_wrap'>
      <div className={show ? 'loading' : 'loading hide'}>
        <svg width='100' height='100' viewBox='0 0 100 100'>
          <polyline
            className='line-cornered stroke-still'
            points='0,0 100,0 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
          <polyline
            className='line-cornered stroke-still'
            points='0,0 0,100 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
          <polyline
            className='line-cornered stroke-animation'
            points='0,0 100,0 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
          <polyline
            className='line-cornered stroke-animation'
            points='0,0 0,100 100,100'
            strokeWidth='10'
            fill='none'
          ></polyline>
        </svg>
      </div>

      <div className='container' id='container'>
        <div className='form-container sign-up-container'>
          <form method='post'>
            <h1>Create Account</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-google-plus-g'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type='text'
              name='username'
              placeholder='User name'
              autoComplete='none'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              autoComplete='none'
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='none'
            />
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm password'
              autoComplete='none'
            />
            <button className='mgt8' onClick={(e) => register(e)}>
              Sign Up
            </button>
            <span className='mgt8' className='error'>
              {registerMessage}
            </span>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form method='post'>
            <h1>Sign in</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-google-plus-g'></i>
              </a>
              <a href='#' className='social'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type='text'
              name='username'
              onChange={(e) => handleValueChanges(e)}
              placeholder='Username'
              autoComplete='none'
            />
            <input
              type='password'
              name='password'
              onChange={(e) => handleValueChanges(e)}
              placeholder='Password'
              autoComplete='none'
            />
            <a href='#'>Forgot your password?</a>
            <button onClick={(e) => login(e, user)}>Sign In</button>
            <span className='mgt8' className='error'>
              {loginMessage}
            </span>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className='ghost' id='signIn'>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>SCHOOL MANAGEMENT</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className='ghost' id='signUp'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthScreen;