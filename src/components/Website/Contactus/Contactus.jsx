import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "./Contactus.scss";
import Contact1 from "../../../assets/images/contact-1.jpg"
import Subfooter from '../../Common/Subfooter/Subfooter';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';

const Contactus = () => {
  return (
    <>
    <Header />
    <section className="contact_first-sec">
    <Container fluid>
      <Row>
        <Col style={{padding:"0px"}}>
          <img className="contact_main_img" src={Contact1}></img>
        </Col>
      </Row>
    </Container>
  </section>
  <section className="contact_second_section">
        <Container>
          <Row>
            <Col className="left_col" lg={6} md={6} sm={12}>
              <h3 className="therapy_contact_heading">
                Contact For Booking
              </h3>
            </Col>
            <Col lg={6} m={6} sm={12}>
              <h1 className="contact_heading">
              Contact Us<br/>
              </h1>
              <div className='contact_box'>
                
                <p className="contact_text">
                Email us: clenzbeautymassage@gmail.com
              </p>
              </div>
              
              <div className='contact_box'>
                
                <p className="contact_text1">
                Call us: + 971 50 877 4398
              </p>
              </div>

              <div className='contact_box'>
               
                <p className="contact_text2">
                Location: Electra Park Salam Street AUH, ABU DHABI
              </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  <Footer />
  <Subfooter />
  </>
  )
}

export default Contactus