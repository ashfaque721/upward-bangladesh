import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import img from '../../assets/img/LOGO.png'
import { Link } from 'react-router-dom'
import '../../assets/css/footer.css'

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Link to='/'>
              <img
                src={img}
                alt='upward'
                style={{ height: '150px', width: '150px' }}
              />
            </Link>
            <Link className='footer-link terms' to='privacy-policy'>
              Privacy Policy
            </Link>
            <Link
              className='footer-link terms'
              to='terms-and-conditions'
            >
              Terms and Conditions
            </Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Link className='footer-link' to='about'>
              Overview
            </Link>
            <Link className='footer-link' to='gallery'>
              Gallery
            </Link>
            <Link className='footer-link' to='articles'>
              Articles
            </Link>
            <Link className='footer-link' to='team'>
              Team
            </Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href='#'>
              Address : Dhaka , Bangladesh
            </Footer.Link>
            <Footer.Link href='mailto:info@upwardbd.com'>
              E-mail :info@upwardbd.com
            </Footer.Link>
            <Link
              className='footer-link'
              style={{
                color: 'white',
                textDecoration: 'none',
                fontFamily: "'Quicksand', sans-serif",
                fontSize: 14,
                marginBottom: 5,
              }}
              to='sponsor'
            >
              Sponsor Us
            </Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link
              href='https://www.facebook.com/UpwardBD'
              target='_blank'
            >
              <Icon className='fab fa-facebook-f' />
              Facebook
            </Footer.Link>
            <Footer.Link
              href='https://www.linkedin.com/company/upward-bangladesh'
              target='_blank'
            >
              <Icon className='fab fa-linkedin' />
              Linked In
            </Footer.Link>
            <Footer.Link
              href='https://www.youtube.com/channel/UCMKUFRHSOWGWjvhKdqAotKQ'
              target='_blank'
            >
              <Icon className='fab fa-youtube' />
              Youtube
            </Footer.Link>
            <Footer.Link
              href='https://www.instagram.com/upward.bd/?hl=en'
              target='_blank'
            >
              <Icon className='fab fa-instagram' />
              Instagram
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}
