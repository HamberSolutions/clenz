import React, { useState } from "react";

import "./Services.scss";
import Header from "../../Common/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import service1 from "../../../assets/images/Service-1.jpg";
import Footer from "../../Common/Footer/Footer";
import Subfooter from "../../Common/Subfooter/Subfooter";

const Services = () => {
  const [sharedData, setSharedData] = useState([]);

  const handleClick = (data) => {
    setSharedData([...sharedData, data]);
  };
  return (
    <>
      <Header />
      <section className="services_first-sec">
        <Container fluid>
          <Row>
            <Col style={{ padding: "0px" }}>
              <img className="services_main_img" src={service1} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services_second_sec">
        <Container>
          <Row>
            <Col>
              <h1 className="services_heading">Services We Offer</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={7} md={7} sm={12}>
              <Row>
                <Col>
                  <h2 className="All_headings">Featured</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                  <Col lg={1} md={1} sm={1}>
                    <Button
                      onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                              <h4 className="headings">Relaxation Massage</h4>
                              <p className="time_headings">
                                60 minutes session
                              </p>
                            </Col>
                            <Col>
                              <h6 className="price">AED 249</h6>
                            </Col>
                          </div>
                        )
                      }
                      className="select_btn"
                    ></Button>
                  </Col>

                  
                    <Col lg={9} md={9} sm={9}>
                      <h4 className="headings">Relaxation Massage</h4>
                      <p className="time_headings">60 minutes session</p>
                    </Col>
                    <Col lg={2} md={2} sm={2}>
                      <h6 className="price">AED 249</h6>
                    </Col>
                  
                </Row>
                <div className="line_div"></div>
                <Row>
                  <Col lg={1} md={1} sm={1}>
                   <Button  onClick={() =>
                        handleClick( <div><Col >
                          <h4 className="headings">Relaxation Massage</h4>
                          <p className="time_headings">90 minutes session</p>
                        </Col>
                        <Col >
                          <h6 className="price">AED 349</h6>
                        </Col></div>)}  className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Relaxation Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                  <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(<div><Col>
                          <h4 className="headings">Deep Tissue Massage</h4>
                          <p className="time_headings">60 minutes session</p>
                        </Col>
                        <Col>
                          <h6 className="price">AED 249</h6>
                        </Col></div>)} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Deep Tissue Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(<div>
                          <Col>
                    <h4 className="headings">Deep Tissue Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                        </div>)} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Deep Tissue Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(<div>
                          <Col>
                    <h4 className="headings">Couple Massage</h4>
                    <p className="time_headings"> 60 minutes each session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                        </div>)} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Couple Massage</h4>
                    <p className="time_headings"> 60 minutes each session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">
                      MADEROTHERAPHY ANTI CELLULITE(wooden treatment)
                    </h4>
                    <p className="time_headings"> 60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 299</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">
                      MADEROTHERAPHY ANTI CELLULITE(wooden treatment)
                    </h4>
                    <p className="time_headings"> 60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 299</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(<div>
                          <Col>
                    <h4 className="headings">Clenz Signature Massage</h4>
                    <p className="time_headings"> 120 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 549</h6>
                  </Col>
                        </div>)} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Clenz Signature Massage</h4>
                    <p className="time_headings"> 120 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 549</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
              <Row>
                <Col>
                  <h2 className="All_headings">Clenz Special</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(<div>
                          <Col>
                          <h4 className="headings">Luxurious Services </h4>
                    <p className="time_headings"> 2hr 30mins session</p>
                          </Col>
                          <Col>
                          <h6 className="price">AED 449</h6>
                          </Col>
                        </div>)} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Luxurious Services </h4>
                    <p className="time_headings"> 2hr 30mins session</p>

                    <h6 className="add_on">
                      60Min Choice of Massage + 5 Add on Services
                    </h6>
                    <h5 className="center_heading">Massage Choice:</h5>
                    <p className="add_on">
                      RELAXATION
                      <br />
                      DEEP TISSUE <br />
                      SPORT MASSAGE
                      <br />
                      THAI MASSAGE
                      <br />
                      REFLEXOLOGY <br />
                      AROMATHERAPY <br />
                      POST NATAL MASSAGE
                    </p>

                    <h5 className="center_heading">Add On</h5>
                    <p className="add_on">
                      EAR CANDLING <br />
                      BODY EXFOLIATION <br />
                      RADIANT GLOW FACIAL <br />
                      FINE LINES FACIAL MASSAGE
                      <br />
                      HEAD MASSAGE <br />
                      FOOT MASSAGE
                    </p>
                  </Col>

                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Refreshing Packages</h4>
                    <p className="time_headings">120 minutes session</p>
                            </Col>
                            <Col>
                            <h6 className="price">AED 349</h6>
                            </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Refreshing Packages</h4>
                    <p className="time_headings">120 minutes session</p>
                    <h6 className="add_on">
                      60Min Choice of Massage + 3 Add on Services
                    </h6>
                    <h5 className="center_heading">Massage Choice:</h5>
                    <p className="add_on">
                      RELAXATION <br />
                      DEEP TISSUE <br />
                      SPORT MASSAGE <br />
                      THAI MASSAGE <br />
                      REFLEXOLOGY <br />
                      AROMATHERAPY <br />
                      POST NATAL MASSAGE{" "}
                    </p>

                    <h5 className="center_heading">Add On</h5>
                    <p className="add_on">
                      EAR CANDLING <br />
                      BODY EXFOLIATION <br />
                      RADIANT GLOW FACIAL{" "}
                    </p>
                  </Col>

                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
              <Row>
                <Col>
                  <h2 className="All_headings">Leisure Pacakges</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Group Of Faith Special</h4>
                    <p className="time_headings"> 3hr 45min . 2 services</p>
                            </Col>
                            <Col>
                            <h6 className="price">AED 849</h6>
                            </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Group Of Faith Special</h4>
                    <p className="time_headings"> 3hr 45min . 2 services</p>
                    <h6 className="add_on">Services for 3</h6>
                    <p className="add_on">
                      Body Exfoliation
                      <br />
                      60 Min Massage(relaxation or aroma therapy)
                      <br />
                      Ear Cnadling <br />
                      Radiant GLow Facial
                      <br />
                      15Min Fine Lines Facial Massage
                    </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 849</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">The Star Of Clenz Spa</h4>
                    <p className="time_headings"> 120 minutes session</p>
                            </Col>
                            <Col>
                            <h6 className="price">AED 449</h6>
                            </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">The Star Of Clenz Spa</h4>
                    <p className="time_headings"> 120 minutes session</p>
                    <p className="add_on">
                      Clanz Special
                      <br />
                      Radiant Glow Facial
                      <br />
                      15Mins Fine Lines Facial Massage
                    </p>
                  </Col>

                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Solemn Prayer Massage</h4>
                    <p className="time_headings"> 105 minutes session</p>
                    <h6 className="add_on">Service For 1</h6>
                            </Col>
                            <Col>
                            <h6 className="price">AED 299</h6>
                            </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Solemn Prayer Massage</h4>
                    <p className="time_headings"> 105 minutes session</p>
                    <h6 className="add_on">Service For 1</h6>
                    <p className="add_on">
                      Body Exfoliation
                      <br />
                      60 Min Massage(relaxation or aroma therapy)
                      <br />
                      Ear Cnadling <br />
                      Radiant GLow Facial
                      <br />
                      15Min Fine Lines Facial Massage
                    </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 299</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Under The Lanterns Special </h4>
                    <p className="time_headings">105 minutes session</p>
                    <h6 className="add_on">Service For 1 Person</h6>
                            </Col>
                            <Col>
                            <h6 className="price">AED 349</h6>
                            </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Under The Lanterns Special </h4>
                    <p className="time_headings">105 minutes session</p>
                    <h6 className="add_on">Service For 1 Person</h6>
                    <p className="add_on">
                      60 Min Massage (cupping and hotstone)
                      <br />
                      Ear Candling
                      <br />
                      Radiant Glow Facial <br />
                      15 Min Fine Lines Facial Massage
                    </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Crescent Moon Massage</h4>
                    <p className="time_headings">105 minutes session </p>
                    <h6 className="add_on">Service for 2 Persons</h6>
                            </Col>
                            <Col>
                            <h6 className="price">AED 499</h6>
                            </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Crescent Moon Massage</h4>
                    <p className="time_headings">105 minutes session </p>
                    <h6 className="add_on">Service for 2 Persons</h6>
                    <p className="add_on">
                      Body Exfoliation <br />
                      60 Min Massage (relaxation or aroma therapy)
                      <br />
                      Radiant Glow Facial
                      <br />
                      15 Min Fine Line Facial Massage
                    </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 499</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
              <Row>
                <Col>
                  <h2 className="All_headings">Single Massage </h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings"> Deep Tissue Massage </h4>
                    <p className="time_headings">90 Minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings"> Deep Tissue Massage </h4>
                    <p className="time_headings">90 Minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Relaxation</h4>
                    <p className="time_headings">60 Minutes session </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Relaxation</h4>
                    <p className="time_headings">60 Minutes session </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Lymphatic Drainage Massage </h4>
                    <p className="time_headings">90 minutes session </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 399</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Lymphatic Drainage Massage </h4>
                    <p className="time_headings">90 minutes session </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 399</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">
                      Maderotherapy Slimming(wood treatment)
                    </h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 399</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">
                      Maderotherapy Slimming(wood treatment)
                    </h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 399</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(<div>
                           <Col>
                    <h4 className="headings">Lymphatic Drainage Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 279</h6>
                  </Col>
                        </div>)} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Lymphatic Drainage Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 279</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">HotStone & Relax </h4>
                    <p className="time_headings"> 45 minutes session</p>
                  </Col>
                  <Col className="price">AED 249</Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">HotStone & Relax </h4>
                    <p className="time_headings"> 45 minutes session</p>
                  </Col>
                  <Col className="price">AED 249</Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">45 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">45 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Lymphatic Drainage Massage</h4>
                    <p className="time_headings">45 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 199</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Lymphatic Drainage Massage</h4>
                    <p className="time_headings">45 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 199</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">
                      Mediotherapy Anti Cellulite (wooden treatment)
                    </h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 299</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">
                      Mediotherapy Anti Cellulite (wooden treatment)
                    </h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 299</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                              <Col>
                    <h4 className="headings">Pre & Post Natal Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Pre & Post Natal Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Pre & Post Natal Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Pre & Post Natal Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Slimming Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Slimming Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Slimming Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Slimming Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Reflexology Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Reflexology Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Reflexology Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Reflexology Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Sports Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Sports Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Sports Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Sports Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Hot Oil Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Hot Oil Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Traditional Thai Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Traditional Thai Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Traditional Thai Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Traditional Thai Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Aroma Therapy Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Aroma Therapy Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Aroma Therapy Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Aroma Therapy Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">4 Hands Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                    <h6>2 therapist in 1 client</h6>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">4 Hands Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                    <h6>2 therapist in 1 client</h6>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
              <Row>
                <Col>
                  <h2 className="All_headings">Couple Massage</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Couple Massage (60 minutes)</h4>
                    <p className="time_headings">120 minutes . 2 Services </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Couple Massage (60 minutes)</h4>
                    <p className="time_headings">120 minutes . 2 Services </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Couple Massage (90 minutes)</h4>
                    <p className="time_headings">180 minutes . 2 Services </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 549</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Couple Massage (90 minutes)</h4>
                    <p className="time_headings">180 minutes . 2 Services </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 549</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
              <Row>
                <Col>
                  <h2 className="All_headings">Combinations</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Hotstone & Relax</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Hotstone & Relax</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Full Body Scrub & Relax</h4>
                    <p className="time_headings">90 minutes session</p>
                            </Col>
                            <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Full Body Scrub & Relax</h4>
                    <p className="time_headings">90 minutes session</p>
                    <p className="para">
                      Body scrubs remove dead skin cells, and so provide several
                      benefits: They allow your skin to absorb moisturizer
                      better. By doing dead skin cell buildup, any moisturizer
                      applied afterward will soak into the skin more thoroughly.
                      They unclog pores and prevent ingrown hairs.
                    </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">90 minutes session</p>
                            </Col>
                            <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">90 minutes session</p>
                    <p className="para">
                      Cupping is a type of alternative therapy that originated
                      in China. It involves placing cups on the skin to create
                      suction. The suction may facilitate healing with blood
                      flow. Proponents also claim the suction helps facilitate
                      the flow of “qi” in the body.
                    </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Hot Stone & Relax</h4>
                    <p className="time_headings">90 minutes session</p>
                            </Col>
                            <Col>
                    <h6 className="price">AED 499</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Hot Stone & Relax</h4>
                    <p className="time_headings">90 minutes session</p>
                    <p className="para">
                      A primary benefit associated with the practice is that of
                      stimulating blood flow in the circulatory system through
                      the heat and movement of the stones.Stone massages also
                      ease muscle pain and often, the presence of muscle tension
                      and spasms through reducing inflammation and relaxing
                      muscles through a combination of both the heat and
                      movement experience during the practice to access deeper
                      tissues.
                    </p>{" "}
                  </Col>
                  <Col>
                    <h6 className="price">AED 499</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>

              <Row>
              
                <Col>
                
                  <h2 className="All_headings">Massage Add On</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                    <h4 className="headings">Ear Candling</h4>
                    <p className="time_headings">20 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 49</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Ear Candling</h4>
                    <p className="time_headings">20 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 49</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
              <Row>
                <Col>
                  <h2 className="All_headings"> 30 Min Combo With Massage</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Body Scrub</h4>
                    <p className="time_headings">30 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 99</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Body Scrub</h4>
                    <p className="time_headings">30 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 99</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Head Massage</h4>
                    <p className="time_headings">30 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 99</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Head Massage</h4>
                    <p className="time_headings">30 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 99</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
              <Row>
                
                <Col>
                  <h2 className="All_headings">Clenz Signature (VIP)</h2>
                  <p>
                    It is a combination of hot stone, traditional ventosa and
                    massage.
                  </p>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                             <Col>
                    <h4 className="headings">Clenz Signature</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Clenz Signature</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
                <Row>
                <Col lg={1} md={1} sm={1} >
                          <Button onClick={() =>
                        handleClick(
                          <div>
                            <Col>
                            <h4 className="headings">Clenz Signature Massage</h4>
                    <p className="time_headings">120 minutes session</p>
                            </Col>
                            <Col>
                    <h6 className="price">AED 549</h6>
                  </Col>
                          </div>
                        )} className="select_btn"></Button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Clenz Signature Massage</h4>
                    <p className="time_headings">120 minutes session</p>
                    <p className="para">
                      It is a combination of hot stone, traditional ventosa and
                      massage.
                    </p>
                  </Col>

                  <Col>
                    <h6 className="price">AED 549</h6>
                  </Col>
                </Row>
                <div className="line_div"></div>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12} className="right_col">
              <div className="ticket_back_div">
                <Row>
                  <Col>
                    <h6 className="clenz_heading">
                      Clenz Spa & Saloon | Home Services
                    </h6>
                    <p className="locations">
                      Electra Park Salam Street AUH | Abu Dhabi
                    </p>
                  </Col>
                </Row>
                <div className="price_line_div"></div>
                <div className="package_div">
                  <Row>
                    <Col>
                      <h4 className="show_data"> {sharedData.map((data, index) => (
                        <div key={index}>{data}</div>
                      ) )}</h4>
                    </Col>
                  </Row>
                </div>
                <div className="price_line_div"></div>
                <Row>
                  <Col>
                    <h5 className="total">Total</h5>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
      <Subfooter />
    </>
  );
};

export default Services;

