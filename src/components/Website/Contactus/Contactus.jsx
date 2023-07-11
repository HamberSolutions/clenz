import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contactus.scss";
import Contact1 from "../../../assets/images/contact-1.jpg";
import Subfooter from "../../Common/Subfooter/Subfooter";
import Footer from "../../Common/Footer/Footer";
import Header from "../../Common/Header/Header";
import { SlLocationPin } from "react-icons/sl";
import { BsFillTelephoneFill } from "react-icons/bs";
import whatsappimage from "../../../assets/images/whatsapp.png";

const Contactus = () => {
  return (
    <div className="contact_backround">
      <Header />
      <div className="whatsapp_div">
        <a href="https://wa.me/971508774398/">
          <img className="whatsapp_image" src={whatsappimage} alt="im" />
        </a>
      </div>
      <section className="contact_first-sec">
        <Container fluid>
          <Row>
            <Col style={{ padding: "0px" }}>
              <img className="contact_main_img" src={Contact1} alt="im" />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="contact_top_div">
                <p className="center_text">SPA & SALOON CENTER ABU DHABI</p>
                <h1 className="contact_heading"> Contact Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="contact_second_section">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <p className="wait_text">WHAT ARE YOU WAITING FOR...</p>
              <h2 className="make_heading">Make an appointment....</h2>
              <h5 className="locate">
                <SlLocationPin className="icon_loc" /> OUR LOCATION
              </h5>
              <p className="address">Electra Park Salam Street Abu Dhabi</p>
              <h5 className="contact">
                <BsFillTelephoneFill className="phn" /> Contact
              </h5>
              <p className="number">+971 50 877 4398</p>
              <div className="cline_div"></div>
            </Col>
            <Col lg={6} m={6} sm={12}></Col>
          </Row>
        </Container>
      </section>
      <Footer />
      <Subfooter />
    </div>
  );
};

export default Contactus;
