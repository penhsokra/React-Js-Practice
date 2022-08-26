import { useEffect, useState } from 'react';
import service from '../../service/service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';
import LoadingA from '../../compoments/loadings/loadingA/LoadingA';
function AuthScreen() {
  let navigate = useNavigate();
  const [isLogin, setIslogin] = useState(localStorage.getItem('islogin'));
  const [loginMessage, setLoginMessage] = useState('');
  const [loading, setLoading] = useState(false);
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
    if (isLogin) {
      navigate('/category');
    }
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
    setLoading(true);
    event.preventDefault();
    setLoginMessage('');
    service('POST', '/api/auth/login', user).then(function (response) {
      setLoading(false);
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
        localStorage.setItem('islogin', true);
        navigate('/category');
      }
    });
  };

  const register = (e) => {
    e.preventDefault();
    alert('No API');
  };

  return (
    <div className='auth_wrap'>
      <LoadingA show={loading} />
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
            <span className='mgt8' className='error'></span>
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
