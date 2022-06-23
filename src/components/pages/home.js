import React, { Component } from 'react'
import Header from '../common/Header'
import image from '../assets/img/banner1.png'
import FocusArea from '../FocusArea'
import PauseOnHover from '../partners'
import MenuArticles from '../MenuArticles'
import Testimonial from '../Testimonials'

class Home extends Component {
  render() {
    return (
      <div>
        <Header image={image} />

        <div>
          <FocusArea />
          <hr />
        </div>
        <MenuArticles />
        <Testimonial />
        <PauseOnHover />
      </div>
    )
  }
}

export default Home
