import React, { Component } from 'react';
import Card from './eventCards';
import img1 from './assets/img/events/ascension.jpg';
import img2 from './assets/img/events/2.png';
class Cards extends Component{
    render(){
        return(
            <>
            <h2 className="title-card">Our Events</h2>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Card
                            img={img1}
                            title="Ascension 1.0"
                            text="Hey folks! We all know that you guys are getting sick because of this entire lockdown system. But listen up, the quarantine period is the best time to showcase your creativity and talents not on the bed, but on the home desk. So, Upward Bangladesh is inviting you to be a part of our upcoming Seminar 'Ascension 1.0' where there will be well-known speakers who will help you to expose your new talents which you have unleashed in this pandemic"
                            link="https://www.facebook.com/events/s/ascension-10-presented-by-upwa/925258591307034/"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Card
                            img={img2}
                            title="Ascension 2.0"
                            text="Greetings! The world has slowed down so that you can rediscover yourself. It’s not only the time to just stay at home but also to make it more productive. After successfully launching our 1st season last year, we are all set to launch ‘Ascension 2.0’ this year."
                            link="https://www.facebook.com/events/149819333658880/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A927131608022346%7D%7D]%22%7D"
                        />
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Cards;