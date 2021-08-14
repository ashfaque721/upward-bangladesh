import React from 'react';
import './assets/css/card.css'
const Card = props => {
    return(
        <div className="card text-center shadow">
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