import React, { Component } from 'react';
import Header from '../common/Header';
import image from '../assets/img/banner1.png';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    image={image}
                />
            </div>
        )
    }
}

export default Home;
