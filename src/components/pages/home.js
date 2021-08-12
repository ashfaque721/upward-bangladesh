import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/banner1.png';
import FocusArea from '../FocusArea';

class Home extends Component{
    render() {
        return (
            <div>
                <Header
                    image={image}
                />
                <div>
                    <FocusArea />
                </div>
            </div>
        )
    }
}

export default Home; 
