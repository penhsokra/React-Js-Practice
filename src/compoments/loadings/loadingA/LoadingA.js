import './LoadingA.css';
import React from 'react';

function LoadingA(props) {
  return (
    <div className={props.show ? 'loadingA' : 'loadingA hide'}>
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
  );
}

export default LoadingA;
