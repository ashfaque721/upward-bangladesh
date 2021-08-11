import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/banner1.png'
import Timeline from '../common/Timeline';

class About extends Component{
    render() {
        return (
            <div>
                <Header
                    image={image}
                />
                <Timeline/>
            </div>

        );
    }
}

export default About;