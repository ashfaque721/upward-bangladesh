import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='donate'>
      <button className='btn1'>Sponsor Us</button>
    </Link>
  );
}
