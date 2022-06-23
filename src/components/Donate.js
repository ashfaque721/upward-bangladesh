import React, { Component } from 'react'
import './assets/css/donate.css'
class Donate extends Component {
  render() {
    return (
      <div className='donate'>
        <div></div>
        <div className='donate m-5'>
          <div>
            <h1
              className='title donate-title p-5'
              style={{ marginTop: '150px' }}
            >
              Why Sponsor Us
            </h1>
            <p
              className='donate-text'
              style={{ marginBottom: '70px' }}
            >
              The volunteers and participants of various events
              organized by Upward Bangladesh are the youth of the
              country, who are soon to be the dominant section of the
              country’s demographics and are a future major force in
              the county’s consumer market. Upward would like to
              invite your company to be a part of our endeavor to
              enlightening the calibre and potential of these
              ambitious and bright minds. The sponsorship would not
              only help your company to gain access to almost 1000
              participants from top educational institutes of
              Bangladesh but also would provide you a great
              opportunity to provide our participants with information
              on upcoming promotions. We believe this exposure would
              be highly beneficial for your company’s reputation as
              well. You sent To know more, feel free to contact:{' '}
              <a
                style={{ textDecoration: 'none' }}
                href='tel:+8801648142566'
              >
                +8801648142566{' '}
              </a>
              <br />
              Or mail Us:
              <a
                style={{ textDecoration: 'none' }}
                href='mailto:info@upwardbd.com'
              >
                {' '}
                info@upwardbd.com
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Donate
