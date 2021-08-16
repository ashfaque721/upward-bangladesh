import React, { Component } from 'react';
// import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import skill_dev_img from './assets/img/skill_dev.jpg';
import sus_dev_goal_img from './assets/img/sus_dev_goal.jpg';
import youth_empower_img from './assets/img/youth_empower.jpg';
import './assets/css/particle.css';

class FocusArea extends Component {
    render() {
        return (
            <section className="w3l-servicesblock py-5" id="who">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="row">
                        <div className="col-md-4 focus">
                            <h3 className="title-big mx-0"> Focus Area</h3>
                            <a href="https://www.facebook.com/UpwardBD" target="_blank" rel="noreferrer"><button className="a text-center">Learn More</button></a>
                        </div>
                        <div className="col-md-8 m-auto">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 image">
                                    <img src={youth_empower_img} alt="" className="img-fluid image-img radius-image" />
                                    <div className="image-overlay">
                                        <div className="image-title">Youth Empowerment</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 image mt-5">
                                    <img src={skill_dev_img} alt="" className="img-fluid image-img radius-image" />
                                    <div className="image-overlay">
                                        <div className="image-title">Skill Development</div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 image mt-5">
                                    <img src={sus_dev_goal_img} alt="" className="img-fluid radius-image image-img" />
                                    <div className="image-overlay">
                                        <div style={{fontSize: "1em"}} className="image-title">Sustainable Development Goals</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FocusArea;