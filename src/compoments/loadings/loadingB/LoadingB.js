import './LoadingB.css';
import React from 'react';

function LoadingB(props) {
  return (
    <div className={props.show ? 'loadingB' : 'loadingB hide'}></div>
  );
}

export default LoadingB;
