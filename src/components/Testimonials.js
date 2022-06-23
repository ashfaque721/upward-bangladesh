import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './assets/css/Testimonials.css'
import { Avatar } from '@material-ui/core'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import img1 from './assets/img/testimonial/yousuf.webp'
import img2 from './assets/img/testimonial/nuri.jpg'
import img3 from './assets/img/testimonial/fuad.jpg'

const PreviousBtn = (props) => {
  console.log(props)
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  )
}

const NextBtn = (props) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: 'gray', fontSize: '45px' }} />
    </div>
  )
}

const Testimonial = () => {
  return (
    <div
      className='testimonial'
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 60,
      }}
    >
      <div style={{ width: '50%', textAlign: 'center' }}>
        <h1
          className='testimonial-header'
          style={{ marginBottom: 20 }}
        >
          What Well-wishers Say About Us
        </h1>
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          dots
          autoplay={true}
        >
          <CardTestimonial
            img={img1}
            text='We really appreciate every work of Upward Bangladesh. Ysse team wish you luck and success for your upcoming event and project. Thank you.'
            name='Sheikh Mohammad Yousuf Hossain'
            designation='Founder and President, Youth School For Social Entrepreneurs'
          />
          <CardTestimonial
            img={img2}
            text='Being a part of both Ascension 1.0 and Ascension 2.0 has made me a witness of the immense growth of Upward Bangladesh. I have come to know some young minds full of potential through these events. They are open to opportunities and always eager to learn. Upward Bangladesh has a great future ahead and I wish them all the best.'
            name='Noushin Nuri'
            designation='Head of Idea Modulation, Easecom'
          />
          <CardTestimonial
            img={img3}
            text='Upward Bangladesh is the organization, carry on this impressive task with young characters. Ascension 2.0 was a well-organized event powered by Upward Bangladesh where I, Abu M. Fuad had performed as a Trainer of ‘Event Management’. I was pleased to see such immense responses from the young. Thanks to ‘Upward Bangladesh’ to prepare the field for my vital role. Upward Bangladesh is leading towards these uprisings.'
            name='Abu M. Fuad'
            designation='Country Director, All India Council For Robotics & Automation'
            designation2='CEO, Ektukhani Robotics'
          />
        </Slider>
      </div>
    </div>
  )
}

const CardTestimonial = ({
  img,
  text,
  name,
  designation,
  designation2,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'gray',
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: '50%' } }}
        src={img}
        style={{
          width: 125,
          height: 125,
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>{text}</p>
      <span style={{ fontWeight: 1500, fontFamily: 'sans-serif' }}>
        - {name}
      </span>
      <p style={{ fontStyle: 'italic', marginTop: 25 }}>
        {designation}
      </p>
      <p style={{ fontStyle: 'italic' }}>{designation2}</p>
    </div>
  )
}

export default Testimonial
