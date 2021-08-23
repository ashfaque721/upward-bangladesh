import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import img from '../../assets/img/LOGO.png';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="/"><img src={img} alt="upward" style={{height: "150px", width: "125px"}} /></Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="/about">Overview</Footer.Link>
                        <Footer.Link href="/gallery">Gallery</Footer.Link>
                        <Footer.Link href="/articles">Articles</Footer.Link>
                        <Footer.Link href="/team">Team</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">Address : Dhaka , Bangladesh
                        </Footer.Link>
                        <Footer.Link href="mailto:info@upwardbd.com">E-mail :info@upwardbd.com</Footer.Link>
                        <Footer.Link href="#">Support us</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/UpwardBD" target="_blank"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                        <Footer.Link href="https://www.linkedin.com/company/upward-bangladesh" target="_blank"><Icon className="fab fa-linkedin" />Linked In</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms and Conditions</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}