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
                        <Footer.Link href="/gallery">Gallery</Footer.Link>
                        <Footer.Link href="/articles">Articles</Footer.Link>
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
                        <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}