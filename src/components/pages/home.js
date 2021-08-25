import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/banner1.png';
import ParticleBackground from '../config/ParticleBackground';
import FocusArea from '../FocusArea';
import PauseOnHover from '../partners';
import MenuArticles from '../MenuArticles';
import Testimonial from '../Testimonials';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    image={image}
                />
                <div className="particles-js">
                    <ParticleBackground />
                    <div>
                        <FocusArea />
                        <hr />
                    </div>
                </div>
                <MenuArticles />
                <Testimonial />
                <PauseOnHover />
            </div>
        )
    }
}

export default Home;
