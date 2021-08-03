import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/about.jpg'
import Team from '../common/Team';
import Timeline from '../common/Timeline';

class About extends Component{
    render() {
        return (
            <div>
                <Header
                        title="About Us"
                        subtitle="It's really a great story"
                        showButton={false}
                        image={image}
                    />
                <Timeline/>
                <Team/>    
            </div>

        );
    }
}

export default About;