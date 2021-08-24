import React, { Component } from 'react';
import '../assets/css/admin.css';

class About extends Component {
    render() {
        return (
            <div className="">
                <div className="container">
                    <h3 className="text-center title" style={{ marginTop: "90px" }}>About Us</h3>
                    <p className="description">Upward Bangladesh is a youth organization founded on 21st May 2020 to help aspiring young leaders chase their dream. We dream of a country where the young prospects will not be tired of finding jobs and will be confident enough to start something on their own and create more opportunities for others. We wish to help the young entrepreneurs by giving their newly built startups a much-needed promotional boost. We also inspire to use Bangladeshi products over multi-national country products to make a self-dependent Bangladesh one day.</p>
                    <hr />
                    <h3 className="title text-left">Why Upward Bangladesh</h3>
                    <p className="description">Upward Bangladesh currently functions as an online
                        promotional organization and we plan to expand it
                        to clothing and event management ventures where we
                        would like to train our community members to build up
                        confidence and business skills
                    </p>
                    <hr />
                    <h3 className="title text-right">Vision</h3>
                    <p className="description">Upward Bangladesh’s vision is to pioneer a movement transforming the young prospects of our country in an expert and adept human resource contributing to the growth of Bangladesh’s economy.</p>
                    <hr />
                    <h3 className="title text-left">Mission</h3>
                    <p className="description">We dream of a country where the young prospects will not be tired of finding jobs and will be confident enough to start something on their own and create more opportunities for others. With this aim in mind, we plan to organize workshops and events which we believe would help to develop various skills of our community members.</p>
                    <hr />
                </div>
            </div>
        );
    }
}

export default About;