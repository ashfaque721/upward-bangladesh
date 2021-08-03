import React, {Component} from 'react'
import SingleService from './SingleService';

const services = [
    {title: 'E-Commerce', description: 'In ex commodo irure occaecat voluptate magna exercitation mollit ea aliqua officia. Ullamco occaecat sint mollit nostrud commodo cupidatat nisi irure occaecat est fugiat minim quis officia. Sint elit nisi ex et id Lorem officia cillum. Exercitation id minim reprehenderit nostrud proident aliqua occaecat in ipsum magna. Et irure ea do occaecat. Ad consequat elit voluptate aliquip proident duis voluptate ut exercitation pariatur culpa. Ullamco laborum dolore aliquip eu dolor reprehenderit consequat dolore reprehenderit.', icon: 'fa-shopping-cart'},
    {title: 'Responsive Design', description: 'Esse cillum labore cupidatat aute ullamco proident eu. Esse incididunt ipsum labore veniam officia labore. Fugiat fugiat laboris fugiat sunt est velit reprehenderit aute voluptate consectetur adipisicing ea ex esse. Et officia occaecat fugiat ipsum velit incididunt irure adipisicing in nisi reprehenderit Lorem irure. Dolor velit id cupidatat adipisicing consectetur esse ut magna elit elit qui. Et anim quis fugiat dolor commodo eiusmod aliqua non aliqua.', icon: 'fa-laptop'},
    {title: 'Web Security', description: 'Nisi reprehenderit tempor culpa ea reprehenderit commodo anim reprehenderit aute aliquip duis commodo. Aliquip dolore ullamco consequat ex amet ea proident commodo aliquip nulla elit. Anim est deserunt esse nisi nostrud. Nisi eiusmod nisi ea esse dolor aliqua nostrud adipisicing est occaecat ea ipsum officia occaecat.', icon: 'fa-lock'}
]

class Services extends Component{
    render() {
        return (
            <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    {services.map((service, index) => {
                        return <SingleService {...service} key={index}/>
                    })}
                </div>
            </div>
        </section>
        )
    }
}

export default Services;