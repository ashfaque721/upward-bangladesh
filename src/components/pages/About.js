import React, { Component } from 'react';
import '../assets/css/admin.css';

class About extends Component {
    render() {
        return (
            <div className="">
                <div className="container">
                    <iframe style={{ marginTop: "90px" }} width="100%" height="700px" src="https://www.youtube.com/embed/7b-07kfHu_I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h3 className="text-center" style={{ marginTop: 100 }}>About Us</h3>
                    <hr />
                    <p className="description text-secondary">Upward Bangladesh is a youth organization founded on 21st May 2020 to help aspiring young leaders chase their dream. We dream of a country where the young prospects will not be tired of finding jobs and will be confident enough to start something on their own and create more opportunities for others. We wish to help the young entrepreneurs by giving their newly built startups a much-needed promotional boost. We also inspire to use Bangladeshi products over multi-national country products to make a self-dependent Bangladesh one day.</p>
                    <hr />
                    <h3 className="text-center text-info" style={{ marginTop: 100, marginBottom: 50 }}>Why Upward Bangladesh</h3>
                    <p className="description text-secondary">Upward Bangladesh currently functions as an online
                        promotional organization and we plan to expand it
                        to clothing and event management ventures where we
                        would like to train our community members to build up
                        confidence and business skills
                    </p>
                    <hr style={{ marginTop: 0 }} />
                    <div className="container">
                        <div className="col-12">
                            <div className="col-md-12">
                                <h3 className="p-3 bg-dark text-white mr-3" style={{ fontSize: 18, float: "left" }}>Vision:</h3>
                                <p className="col-md-12 p-3 mb-2 description text-secondary" style={{float: "inline-end"}}>Upward Bangladesh’s vision is to pioneer a movement transforming the young prospects of our country in an expert and adept human resource contributing to the growth of Bangladesh’s economy.</p>
                                <hr />
                            </div>
                            <div className="col-md-12">
                                <h3 className="text-left">Mission</h3>
                                <p className="description text-secondary">We dream of a country where the young prospects will not be tired of finding jobs and will be confident enough to start something on their own and create more opportunities for others. With this aim in mind, we plan to organize workshops and events which we believe would help to develop various skills of our community members.</p>
                                <hr />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default About;