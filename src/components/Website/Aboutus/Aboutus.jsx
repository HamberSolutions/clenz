import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Aboutus.scss";
import About1 from "../../../assets/images/about-1.jpg";
import Subfooter from "../../Common/Subfooter/Subfooter";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import Slider from "react-slick";
import img1 from "../../../assets/images/about1.jpg";
import img2 from "../../../assets/images/about2.jpg";
import img3 from "../../../assets/images/about3.jpg";
import whatsappimage from "../../../assets/images/whatsapp.png";

const Aboutus = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="about_backround">
      <Header />
      <div className="whatsapp_div">
        <a href="https://wa.me/971508774398/">
          <img className="whatsapp_image" src={whatsappimage} />
        </a>
      </div>
      <section className="about_first-sec">
        <Container fluid>
          <Row>
            <Col style={{ padding: "0px" }}>
              <img className="about_main_img" src={About1}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="about_top_div">
                <p className="best_text">
                  THE BEST MASSAGE CENTER IN ABU DHABI
                </p>
                <h1 className="about_heading">About Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_second_section">
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <h6 className="about_clenz_text">Clenz Massage Center</h6>
              <h2 className="about_text">
                About Abu Dhabi <br /> Massage <br /> Center
              </h2>
              <div className="about_line_div"></div>
            </Col>
            <Col lg={3} md={3} sm={12}>
              <Slider {...settings}>
                <div>
                  <img className="" src={img1} />
                </div>
                <div>
                  <img className="" src={img2} />
                </div>
                <div>
                  <img className="" src={img3} />
                </div>
              </Slider>
            </Col>
            <Col lg={5} md={5} sm={12}>
              <div className="about_second_line"></div>
              <p className="about_spa">
                Clenz Spa & Saloon is the best <br /> massage center in Abu
                Dhabi. With a <br /> team of highly experienced therapists,
                <br /> we focus on providing our clients with <br />
                unparalleled spa services.
              </p>
              <p className="about_spa">
                We stay up to date with the latest trends
                <br /> in massages, so you can rest assured that <br /> our
                services are high-quality and use the best <br /> products and
                equipment available.
              </p>
            </Col>
          </Row>
          <div className="long_line"></div>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <Footer />
      <Subfooter />
    </div>
  );
};

export default Aboutus;
