import React, { Component } from 'react'
import Field from '../common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email' },
            { name: 'phone', elementName: 'input', type: 'telnum', placeholder: 'Your phone number' },

        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message' }
        ]
    ]
}


class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container mt-5 mb-5">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">If you have any query, feel free to submit it. We're here to answer your valuable questions</h3>
                    </div>
                    <form id="contactForm" onSubmit={this.props.handleSubmit} style={{zIndex: 999}}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                return (
                                    <div className='col-md-6' key={sectionIndex} style={{zIndex: 999}}>
                                        {section.map((field, i) => {
                                            return <Field {...field} key={i} value={this.props.values[field.name]} name={field.name} onChange={this.props.handleChange} onBlur={this.props.handleBlur} touched={(this.props.touched[field.name])} errors={this.props.errors[field.name]} />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div style={{zIndex: 999}}><div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div></div>
                    </form>
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