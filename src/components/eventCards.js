import React, {useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import './assets/css/card.css'
const Card = (props) => {
    useEffect(() => {
        Aos.init({duration: 2500});
    });
    return(
        <div className="card text-center shadow" data-aos="fade-right">
            <div className="overflow">
                <img src={props.img} alt="Ascension 1.0" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-outline-success">Continue Reading</a>
            </div>
        </div>
    );
}

export default Card;