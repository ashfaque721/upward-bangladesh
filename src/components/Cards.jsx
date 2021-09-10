import React, { Component } from 'react';
import Card from './eventCards';
import img1 from './assets/img/events/recruitment.png';
import img2 from './assets/img/events/ascension.jpg';
import img3 from './assets/img/events/2.png';

class Cards extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: "150px" }}>
                <h2 className="title-card">Our Events</h2>
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Card
                                img={img1}
                                title="Upward Bangladesh Recruitment '21"
                                text="Hello good people, It's a call for new member recruitment of Upward Bangladesh. (applause) Wondering what Upward Bangladesh is? Upward Bangladesh is a youth organization founded on 21st May 2020 to help aspiring young leaders chase their dream. Want to join us? Then click the button below and fill up the form."
                                link="https://docs.google.com/forms/d/e/1FAIpQLSeMYmaEi2dB6kytPFANlg_oF0Aa7rXiBWcV4UJE1_IjoOCvHQ/viewform"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <Card
                                img={img2}
                                title="Ascension 1.0"
                                text="Hey folks! We all know that you guys are getting sick because of this entire lockdown system. But listen up, the quarantine period is the best time to showcase your creativity and talents not on the bed, but on the home desk. So, Upward Bangladesh is inviting you to be a part of our upcoming Seminar 'Ascension 1.0' where there will be well-known speakers who will help you to expose your new talents which you have unleashed in this pandemic"
                                link="https://www.facebook.com/events/s/ascension-10-presented-by-upwa/925258591307034/"
                            />
                        </div>
                        <div className="col-12 col-md-4">
                            <Card
                                img={img3}
                                title="Ascension 2.0"
                                text="Greetings! The world has slowed down so that you can rediscover yourself. It’s not only the time to just stay at home but also to make it more productive. After successfully launching our 1st season last year, we are all set to launch ‘Ascension 2.0’ this year."
                                link="https://www.facebook.com/events/149819333658880/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A927131608022346%7D%7D]%22%7D"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;