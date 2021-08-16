import React, { Component } from 'react'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import '../assets/css/contact.css';

class Contact extends Component {

    render() {
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
                                            <form id="contactForm" name="contactForm" className="contactForm">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="name">Full Name</label>
                                                            <input type="text" className="form-control" name="name" id="name"
                                                                placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="email">Email Address</label>
                                                            <input type="email" className="form-control" name="email" id="email"
                                                                placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="subject">Subject</label>
                                                            <input type="text" className="form-control" name="subject" id="subject"
                                                                placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="#">Message</label>
                                                            <textarea name="message" className="form-control" id="message" cols="30"
                                                                rows="4" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="submit" value="Send Message" className="btn btn-primary" />
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
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Your name should be longer than 3 characters").required("Please provide us your name"),
        email: Yup.string().email("A valid email is required").required("Please provide us your email"),
        phone: Yup.string().min(10, "A valid phone number is required").max(15, "Your phone number is too long").required("Please provide us your phone number"),
        message: Yup.string().min(500, 'You need to provide us more detailed information').required("Message is required")
    }),
    handleSubmit: (values, { setSubmitting }) => {
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);