import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/img/banner1.png'
import Team from '../common/Team';

class TeamPage extends Component{
    render() {
        return (
            <div>
                <Header
                    image={image}
                />
                <Team />
            </div>

        );
    }
}

export default TeamPage;