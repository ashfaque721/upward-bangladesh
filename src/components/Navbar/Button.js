import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='courses'>
      <button className='btn1'>Courses</button>
    </Link>
  );
}
