import React from 'react'
import icon from './setting.svg';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt="error-icon"/>
      <span>Something wrong!!!</span>
    </div>
  )
}

export default ErrorIndicator;