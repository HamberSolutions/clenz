import React from "react";
import "./Services.scss";
import Header from "../../Common/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import service1 from "../../../assets/images/Service-1.jpg";

const Services = () => {
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
            <Col>
              <h2>Featured</h2>
            </Col>
          </Row>

          <Row>
            <Col lg={8} md={8} sm={12}>
              <div>
                <Row>
                  <Col>
                    <h4>Relaxation Massage</h4>
                    <p>60 minutes session</p>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Relaxation Massage</h4>
                    <p>90 minutes session</p>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h4>Deep Tissue Massage</h4>
                    <p>60 minutes session</p>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Deep Tissue Massage</h4>
                    <p>90 minutes session</p>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Couple Massage</h4>
                    <p> 60 minutes each session</p>
                  </Col>
                  <Col>
                    <h6>AED 449</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>MADEROTHERAPHY ANTI CELLULITE(wooden treatment)</h4>
                    <p> 60 minutes session</p>
                  </Col>
                  <Col>
                    <h6>AED 299</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Clenz Signature Massage</h4>
                    <p> 120 minutes session</p>
                  </Col>
                  <Col>
                    <h6>AED 549</h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h2>Clenz Special</h2>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h4>
                      Luxurious Services <br />
                      2hr 30mins
                    </h4>
                    <h6>60Min Choice of Massage + 5 Add on Services</h6>
                    <h5>Massage Choice:</h5>
                    <p>
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

                    <h5>Add On</h5>
                    <p>
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
                    <h6>AED 449</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>
                      Refreshing Packages <br />
                      2hr
                    </h4>
                    <h6>60Min Choice of Massage + 3 Add on Services</h6>
                    <h5>Massage Choice:</h5>
                    <p>
                      RELAXATION <br />
                      DEEP TISSUE <br />
                      SPORT MASSAGE <br />
                      THAI MASSAGE <br />
                      REFLEXOLOGY <br />
                      AROMATHERAPY <br />
                      POST NATAL MASSAGE{" "}
                    </p>

                    <h4>Add On</h4>
                    <p>
                      EAR CANDLING <br />
                      BODY EXFOLIATION <br />
                      RADIANT GLOW FACIAL{" "}
                    </p>
                  </Col>

                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h4>Leisure Pacakges</h4>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h5>
                      Group Of Faith Special <br /> 3hr 45min . 2 services
                    </h5>
                    <h6>Services for 3</h6>
                    <p>
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
                    <h6>AED 849</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h5>
                      The Star Of Clanz Spa <br /> 2hr
                    </h5>
                    <p>
                      Clanz Special
                      <br />
                      Radiant Glow Facial
                      <br />
                      15Mins Fine Lines Facial Massage
                    </p>
                  </Col>

                  <Col>
                    <h6>AED 449</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>
                      Solemn Prayer Massage <br /> 1hr 45Min
                    </h4>
                    <h6>Service For 1</h6>
                    <p>
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
                    <h6>AED 299</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Under The Lanterns Special </h4>
                    <p>1hr 45Min</p>
                    <h6>Service For 1 Person</h6>
                    <p>
                      60 Min Massage (cupping and hotstone)
                      <br />
                      Ear Candling
                      <br />
                      Radiant Glow Facial <br />
                      15 Min Fine Lines Facial Massage
                    </p>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Crescent Moon Massage</h4>
                    <h6>1hr 45min </h6>
                    <h6>Service for 2 Persons</h6>
                    <p>
                      Body Exfoliation <br />
                      60 Min Massage (relaxation or aroma therapy)
                      <br />
                      Radiant Glow Facial
                      <br />
                      15 Min Fine Line Facial Massage
                    </p>
                  </Col>
                  <Col>
                    <h6>AED 499</h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h2>Single Massage </h2>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h4> Deep Tissue Massage </h4>
                    <h6>90 Minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Relaxation</h4>
                    <h6>60 Minutes </h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Lymphatic Drainage Massage </h4>
                    <h6>90 minutes </h6>
                  </Col>
                  <Col>
                    <h6>AED 399</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Maderotherapy Slimming(wood treatment)</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 399</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Lymphatic Drainage Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 279</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>HotStone & Relax </h4>
                    <h6> 45 minutes</h6>
                  </Col>
                  <Col>AED 249</Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Cupping & Relax</h4>
                    <h6>45 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Lymphatic Drainage Massage</h4>
                    <h6>45 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 199</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Mediotherapy Anti Cellulite (wooden treatment)</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 299</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Pre & Post Natal Massage</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Pre & Post Natal Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Slimming Massage</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Slimming Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Reflexology Massage</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Reflexology Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Sports Massage</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Sports Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Hot Oil Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Traditional Thai Massage</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Traditional Thai Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Aroma Therapy Massage</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Aroma Therapy Massage</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 249</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>4 Hands Massage</h4>
                    <h6>60 minutes</h6>
                    <h6>2 therapist in 1 client</h6>
                  </Col>
                  <Col>
                    <h6>AED 449</h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h4>Couple Massage</h4>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h4>Couple Massage (60 minutes)</h4>
                    <h6>120 minutes . 2 Services </h6>
                  </Col>
                  <Col>
                    <h6>AED 449</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Couple Massage (90 minutes)</h4>
                    <h6>180 minutes . 2 Services </h6>
                  </Col>
                  <Col>
                    <h6>AED 549</h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h4>Combinations</h4>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h4>Cupping & Relax</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Hotstone & Relax</h4>
                    <h6>60 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Full Body Scrub & Relax</h4>
                    <h6>90 minutes</h6>
                    <p>
                      Body scrubs remove dead skin cells, and so provide several
                      benefits: They allow your skin to absorb moisturizer
                      better. By doing dead skin cell buildup, any moisturizer
                      applied afterward will soak into the skin more thoroughly.
                      They unclog pores and prevent ingrown hairs.
                    </p>
                  </Col>
                  <Col>
                    <h6>AED 349</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Cupping & Relax</h4>
                    <h6>90 minutes</h6>
                    <p>
                      Cupping is a type of alternative therapy that originated
                      in China. It involves placing cups on the skin to create
                      suction. The suction may facilitate healing with blood
                      flow. Proponents also claim the suction helps facilitate
                      the flow of “qi” in the body.
                    </p>
                  </Col>
                  <Col>
                    <h6>AED 449</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Hot Stone & Relax</h4>
                    <h6>90 minutes</h6>
                    <p>
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
                    <h6>AED 499</h6>
                  </Col>
                </Row>
              </div>

              <Row>
                <Col>
                  <h4>Massage Add On</h4>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h4>Ear Candling</h4>
                    <h6>20 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 49</h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h4> 30 Min Combo With Massage</h4>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h4>Body Scrub</h4>
                    <h6>30 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 99</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Head Massage</h4>
                    <h6>30 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 99</h6>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h4>Clenz Signature (VIP)</h4>
                  <p>
                    It is a combination of hot stone, traditional ventosa and
                    massage.
                  </p>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col>
                    <h4>Clenz Signature</h4>
                    <h6>90 minutes</h6>
                  </Col>
                  <Col>
                    <h6>AED 449</h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4>Clenz Signature Massage</h4>
                    <h6>120 minutes</h6>
                    <p>
                      It is a combination of hot stone, traditional ventosa and
                      massage.
                    </p>
                  </Col>
                  <Col>
                    <h6>AED 549</h6>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
