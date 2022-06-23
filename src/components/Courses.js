import React, { Component } from 'react'
import CoursesImg from './assets/img/courses.png'

class Courses extends Component {
  render() {
    return (
      <div className='text-center' style={{ marginTop: '80px' }}>
        <img src={CoursesImg} alt='courses' />
      </div>
    )
  }
}
export default Courses
