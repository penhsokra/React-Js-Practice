import './LoadingB.css';
import React from 'react';

function LoadingB(props) {
  return (
    <div className={props.show ? 'loaderB' : 'loaderB hide'}></div>
  );
}

export default LoadingB;
