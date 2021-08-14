import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Pagewrapper extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <Link to="/"><img className="logo-img" src="assets/img/LOGO.png" alt="upward"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars ms-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={{pathname: "https://courses.upwardbd.com/"}} target="_blank">Courses</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default Pagewrapper;