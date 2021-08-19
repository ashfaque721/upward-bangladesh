import React, {Component} from 'react';
import '../assets/css/admin.css';
import promo from '../assets/videos/promo.mp4';

class About extends Component{
    render() {
        return (
            <div className="container">
                <video className="container-fluid mt-5" autoPlay loop muted>
                    <source src={promo} type="video/mp4" />
                </video>
                <hr />
                <div className="">
                    <h1 className="text-center title">About Us</h1>
                    <p className="description">Upward Bangladesh is a youth organization founded on 21st May 2020 to help aspiring young leaders chase their dream. We dream of a country where the young prospects will not be tired of finding jobs and will be confident enough to start something on their own and create more opportunities for others. We wish to help the young entrepreneurs by giving their newly built startups a much-needed promotional boost. We also inspire to use Bangladeshi products over multi-national country products to make a self-dependent Bangladesh one day.</p>
                    <p className="description mt-5 left">Upward Bangladesh dream to pioneer a movement transforming the young prospects of our country in an expert and adept human resource contributing to the growth of Bangladesh’s economy. With this aim in mind, we plan to organize workshops and events which we believe would help to develop various skills of our community members.</p>
                    <hr />
                </div>             
            </div>
        );
    }
}

export default About;