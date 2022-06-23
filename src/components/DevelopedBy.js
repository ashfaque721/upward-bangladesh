import React, { Component } from 'react'

const year = new Date().getFullYear()

class DevelopedBy extends Component {
  render() {
    return (
      <div className='text-center'>
        <span>&copy;</span> {year} Upward Bangladesh | Developed by{' '}
        <a
          className='text-info'
          href='https://www.facebook.com/CyanGarage/'
          style={{ textDecoration: 'none' }}
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          Cyan Garage
        </a>
      </div>
    )
  }
}

export default DevelopedBy
