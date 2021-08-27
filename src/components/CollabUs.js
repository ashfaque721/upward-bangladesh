import React, { Component } from 'react'
import ParticleBackground3 from './config/ParticleBackgroundDonate';
class Collab extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: 90, backgroundColor: "lightgray" }}>
                <div>
                    <ParticleBackground3 />
                </div>
                <h1 style={{ paddingTop: 80 }}>Collaborate With Us</h1>
                <h6 className="text-secondary mt-5 pb-5">
                    Upward Bangladesh always measures what matters. We have achieved levels of success previous seasons.
                    As a collaborator, we will be together in a mission of changing a bit of the world. We are also aware of growing both the organisation in best way. It requires special marketing, advertising and promotional methods that can be proved to the beneficial in short and long term. Our team also excels in handling different marketing and promotional which are very helpuful for you to grow. Upward Bangladesh firmly believe that the entire partnership/collaboration will prove to be a wonderful opportunity for both the organisation to prosper together.
                    To know more, feel free to contact:
                    <a className="text-info" href="tel:+8801648142566" style={{ textDecoration: "none" }}> +8801648142566</a>
                    <br />
                    Or mail Us:
                    <a className="text-info" href="mailto:info@upwardbd.com" style={{ textDecoration: "none" }}> info@upwardbd.com</a>
                </h6>
            </div>
        )
    }
}

export default Collab;