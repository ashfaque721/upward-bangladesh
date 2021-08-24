import React, { Component } from 'react';
import './assets/css/donate.css';
import ParticleBackground3 from './config/ParticleBackgroundDonate';
class Donate extends Component {
    render() {
        return (
            <div className="donate">
                <div>
                    <ParticleBackground3 />
                </div>
                <div className="container-fluid donate">
                    <div>
                        <h1 className="title donate-title" style={{ marginTop: '150px' }}>Be A Sponsor</h1>
                        <p className="donate-text" style={{ marginBottom: "70px" }}>Upward is a youth led Non-Profit Organization for entrepreneurs. It believes Social Entrepreneurs deals with assisting directly to resolve the major challenges and to utilize the opportunities of a society including protracted poverty, choric illiteracy, escalating unemployment and other associated social tensions. Together we have that strength to bring enduring peace and sustainable prosperity in our community and the world as a whole.
                            For that noble cause of Sponsoring us, please contact us at <a style={{ textDecoration: 'none' }} href="mailto:management.upwardbd@gmail.com">management.upwardbd@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Donate;