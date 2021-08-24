import React, { useState } from 'react'
import '../assets/css/contact.css';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://v1.nocodeapi.com/ashphalt/google_sheets/DvbLBMvLZVSkLXGE?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([[name, email, subject, message, new Date().toLocaleString()]])
            });
            await response.json()
            setData({...data, name: '', email: '', subject: '', message: ''});
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="ftco-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Get in touch</h3>
                                        <div id="form-message-warning" className="mb-4"></div>
                                        <div id="form-message-success" className="mb-4">
                                            Your message was sent, thank you!
                                        </div>
                                        <form id="contactForm" name="contactForm" className="contactForm" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="name">Full Name</label>
                                                        <input type="text" className="form-control" name="name" id="name"
                                                            placeholder="Name" value={name} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="email">Email Address</label>
                                                        <input type="email" className="form-control" name="email" id="email"
                                                            placeholder="Email" value={email} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="subject">Subject</label>
                                                        <input type="text" className="form-control" name="subject" id="subject"
                                                            placeholder="Subject" value={subject} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="#">Message</label>
                                                        <textarea name="message" className="form-control" id="message" cols="30"
                                                            rows="4" placeholder="Message" value={message} onChange={handleChange}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button className="btn btn-primary" type="submit">Send Message</button>
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                    <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                                        <h3>Let's get in touch</h3>
                                        <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span>Address:</span> Dhaka, Bangladesh
                                                </p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span>Phone:</span> <a href="tel:+8801648142566">+8801648142566</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span>Email:</span> <a
                                                    href="mailto:info@upwardbd.com">info@upwardbd.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;