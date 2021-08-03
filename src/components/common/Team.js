import React, { Component } from 'react'
import TeamMembers from './TeamMembers';
import img1 from '../assets/img/team/1.jpg';
import img2 from '../assets/img/team/2.jpg';
import img3 from '../assets/img/team/3.jpg';

const teamMembers = [
    {name: 'Parveen Anand', designation: 'Lead Designer', image: img1},
    {name: 'Diana Petersen', designation: 'Lead Marketer', image: img2},
    {name: 'Larry Brian', designation: 'Lead Developer', image: img3}
]

class Team extends Component{
    render(){
        return(
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {teamMembers.map((member, index) => {
                        return <TeamMembers {...member} key={index}/>
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;