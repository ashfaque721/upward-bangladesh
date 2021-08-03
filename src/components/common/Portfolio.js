import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem';

const portfolio = [
    {title: 'Threads', subtitle: 'Illustration', image: ''},
    {title: 'Explore', subtitle: 'Graphic Design', image: ''},
    {title: 'Finish', subtitle: 'Identity', image: ''},
    {title: 'Lines', subtitle: 'Branding', image: ''},
    {title: 'Southwest', subtitle: 'Website Design', image: ''},
    {title: 'Window', subtitle: 'Photography', image: ''},
]

class Portfolio extends Component {
    render() {
        return(
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {portfolio.map((item, index) => {
                        return <PortfolioItem {...item} key={index}/>
                    })} 
                </div>
            </div>
        </section>
        )
    }
}

export default Portfolio;