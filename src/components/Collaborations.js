import React, { Component } from 'react';
import Card from './eventCards';
import {collabs} from './collabs';
class CardCollabs extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ marginTop: "150px" }}>
                <h2 className="title-card">Our Collaborations</h2>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        {collabs.map((collab, index) => {
                            return (
                                <div className="col-12 col-md-4 col-sm-6 mt-5" key={index}>
                                    <Card
                                        img={collab.img}
                                        title={collab.title}
                                        text={collab.text}
                                        link={collab.link}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardCollabs;