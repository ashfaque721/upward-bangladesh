import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/css/partners.css';
import alat from './assets/img/partners/alat.png';
import atropos from './assets/img/partners/atropos.png';
import easecome from './assets/img/partners/easecom.png';
import eoy from './assets/img/partners/eoy.png';
import itech from './assets/img/partners/itech.png';
import jbc from './assets/img/partners/jbc.png';
import logo from './assets/img/partners/logo.png';
import nikunjo from './assets/img/partners/nikunjo.png';
import soch from './assets/img/partners/soch.png';
import tanrat from './assets/img/partners/tanrat.png';
import techwarno from './assets/img/partners/techwarno.png';
import voroshasthol from './assets/img/partners/voroshasthol.png';
import ycc from './assets/img/partners/ycc.png';
import ysse from './assets/img/partners/ysse.png';

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            pauseOnHover: false,
            arrows: false
        };
        return (
            <div className="container-partner">
                <h2 className="title">We Have Already Collaborated With</h2>
                <Slider {...settings}>
                    <div>
                        <img src={alat} alt="alat" />
                    </div>
                    <div>
                        <img src={atropos} alt="atropos" />
                    </div>
                    <div>
                        <img src={easecome} alt="easecom" />
                    </div>
                    <div>
                        <img src={eoy} alt="eoy" />
                    </div>
                    <div>
                        <img src={itech} alt="itech" />
                    </div>
                    <div>
                        <img src={jbc} alt="jbc" />
                    </div>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <img src={nikunjo} alt="nikunjo" />
                    </div>
                    <div>
                        <img src={soch} alt="soch" />
                    </div>
                    <div>
                        <img src={tanrat} alt="tanrat" />
                    </div>
                    <div>
                        <img src={techwarno} alt="techwarno" />
                    </div>
                    <div>
                        <img src={voroshasthol} alt="voroshasthol" />
                    </div>
                    <div>
                        <img src={ycc} alt="ycc" />
                    </div>
                    <div>
                        <img src={ysse} alt="ysse" />
                    </div>
                </Slider>
            </div>
        );
    }
}