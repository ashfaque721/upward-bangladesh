import React, { Component } from 'react';
// import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import skill_dev_img from './assets/img/skill_dev.jpg';
import sus_dev_goal_img from './assets/img/sus_dev_goal.jpg';
import youth_empower_img from './assets/img/youth_empower.jpg';

class FocusArea extends Component {
    render() {
        return (
            <section class="w3l-servicesblock py-5" id="who">
                <div class="container py-lg-5 py-md-4 py-2">
                    <div class="row">
                        <div class="col-lg-4 about-right-faq align-self">
                            <span class="title-small mb-2"></span>
                            <h3 class="title-big mx-0"> Focus Area</h3>
                            <p class="mt-lg-4 mt-3"></p>
                            <a class="btn btn-style btn-primary btn-lg" href="https://www.facebook.com/UpwardBD"> Learn More</a>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-md-4 col-6 left-wthree-img">
                                    <p class="img-fluid radius-image" >Youth Empowerment</p> <br /><br />
                                    <img src={youth_empower_img} alt="" class="img-fluid radius-image" />

                                </div>
                                <div class="col-md-4 col-6 left-wthree-img">
                                    <p>Skill Development</p> <br /><br />
                                    <img src={skill_dev_img} alt="" class="img-fluid radius-image" />
                                </div>
                                <div class="col-md-4 col-6 left-wthree-img">
                                    <p style={{fontSize: "18px"}}>Sustainable Development Goals</p> <br /> <br />
                                    <img src={sus_dev_goal_img} alt="" class="img-fluid radius-image" />
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