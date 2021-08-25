import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/Testimonials.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import img1 from './assets/img/testimonial/yousuf.webp';
import img2 from './assets/img/testimonial/nuri.jpg';

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50, marginBottom: 60 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>What Well-wishers Say About Us</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <CardTestimonial
            img={img1}
            text="Receive warm greetings from YSSE. We feel delighted to state that we are very pleased to work with your organization as your strategic partner. We really appreciate every work of Upward Bangladesh. Ysse team wish you luck and success for your upcoming event and project. Thank you."
            name="Sheikh Mohammad Yousuf Hossain"
            designation="Founder and President, Youth School For Social Entrepreneurs"
          />
          <CardTestimonial
            img={img2}
            text="Being a part of both Ascension 1.0 and Ascension 2.0 has made me a witness of the immense growth of Upward Bangladesh. I have come to know some young minds full of potential through these events. They are open to opportunities and always eager to learn. Upward Bangladesh has a great future ahead and I wish them all the best."
            name="Noushin Nuri"
            designation=""
          />
        </Slider>
      </div>
    </div>
  );
};

const CardTestimonial = ({ img, text, name, designation }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        {text}
      </p>
      <span style={{ fontWeight: 1500, fontFamily: "sans-serif"}}>- {name}</span>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        {designation}
      </p>
    </div>
  );
};

export default Testimonial;