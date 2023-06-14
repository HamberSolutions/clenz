import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Aboutus.scss";
import About1 from "../../../assets/images/about-1.jpg"
import Subfooter from '../../Common/Subfooter/Subfooter';
import Footer from '../../Common/Footer/Footer';
import Header from '../../Common/Header/Header';

const Aboutus = () => {
  return (
    <>
    <Header />
    <section className="about_first-sec">
    <Container fluid>
      <Row>
        <Col style={{padding:"0px"}}>
          <img className="about_main_img" src={About1}></img>
        </Col>
      </Row>
    </Container>
  </section>
  <section className="about_second_section">
        <Container>
          <Row>
          <Col lg={6} m={6} sm={12}>
              <h1 className="about_heading">
              We Offer Luxury Massage<br/>Services
              </h1>
              <p className="about_text">
              Only Clenz Massage Center offers a complete wellness service that takes you to the depths of tranquility and frees your body, mind, and soul from all the stresses of life.
              </p>
              <p className="about_text">
              Do you want to shine from top to bottom? Our full package of full-body massages is the perfect pampering and beautifying treatment before a special occasion or just to feel completely relaxed after a long and busy week.
              </p>
            </Col>
            <Col className="left_col" lg={6} md={6} sm={12}>
              <h3 className="therapy_heading">
                Massage Therapies <br /> & <br /> Body Treatment
              </h3>
            </Col>
          </Row>
        </Container>
      </section>
  <Footer />
  <Subfooter />
  </>
  )
}

export default Aboutus