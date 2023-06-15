import React from 'react'
import "./Services.scss"
import Header from "../../Common/Header/Header";
import { Col, Container, Row } from 'react-bootstrap';
import service1 from "../../../assets/images/Service-1.jpg";


const Services = () => {
  return (
    <>
      <Header />
      <section className="services_first-sec">
        <Container fluid>
          <Row>
            <Col style={{padding:"0px"}}>
              <img className="services_main_img" src={service1}></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='services_second_sec'>
        <Container>
          <Row>
            <Col>
              <h1 className='services_heading'>Services We Offer</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Featured</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>

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
            </Col>
            <Col lg={6} md={6} sm={12}></Col>
          </Row>
        </Container>
      </section>
      <section className='services_third_sec'>
        <Container>
          <Row>
            <Col>
              <h2>Clenz Special</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>

              <Row>
                <Col>
                  <h4>Luxurious Services</h4>
                  <h4>60Min Choice of Massage + 5 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE</p>
                  <p>THAI MASSAGE </p>
                  <p>REFLEXOLOGY  </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                  <p>FINE LINES FACIAL MASSAGE</p>
                  <p>HEAD MASSAGE </p>
                  <p>FOOT MASSAGE </p>
                </Col>
                <Col>
                  <h6>AED 249</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Refreshing Packages</h4>
                  <h4>60Min Choice of Massage + 3 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE </p>
                  <p>THAI MASSAGE  </p>
                  <p>REFLEXOLOGY </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                </Col>
                <Col>
                  <h6>AED 349</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='service_fourth_sec'>
        <Container>
          <Row>
            <Col>
              <h2>Leisure Packages</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col>
                  <h4>Luxurious Services</h4>
                  <h4>60Min Choice of Massage + 5 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE</p>
                  <p>THAI MASSAGE </p>
                  <p>REFLEXOLOGY  </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                  <p>FINE LINES FACIAL MASSAGE</p>
                  <p>HEAD MASSAGE </p>
                  <p>FOOT MASSAGE </p>
                </Col>
                <Col>
                  <h6>AED 249</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Refreshing Packages</h4>
                  <h4>60Min Choice of Massage + 3 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE </p>
                  <p>THAI MASSAGE  </p>
                  <p>REFLEXOLOGY </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                </Col>
                <Col>
                  <h6>AED 349</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='service_fifth_sec'>
        <Container>
          <Row>
            <Col>
              <h2>Leisure Packages</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col>
                  <h4>Luxurious Services</h4>
                  <h4>60Min Choice of Massage + 5 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE</p>
                  <p>THAI MASSAGE </p>
                  <p>REFLEXOLOGY  </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                  <p>FINE LINES FACIAL MASSAGE</p>
                  <p>HEAD MASSAGE </p>
                  <p>FOOT MASSAGE </p>
                </Col>
                <Col>
                  <h6>AED 249</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Refreshing Packages</h4>
                  <h4>60Min Choice of Massage + 3 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE </p>
                  <p>THAI MASSAGE  </p>
                  <p>REFLEXOLOGY </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                </Col>
                <Col>
                  <h6>AED 349</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='service_sixth_sec'>
        <Container>
          <Row>
            <Col>
              <h2>Leisure Packages</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col>
                  <h4>Luxurious Services</h4>
                  <h4>60Min Choice of Massage + 5 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE</p>
                  <p>THAI MASSAGE </p>
                  <p>REFLEXOLOGY  </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                  <p>FINE LINES FACIAL MASSAGE</p>
                  <p>HEAD MASSAGE </p>
                  <p>FOOT MASSAGE </p>
                </Col>
                <Col>
                  <h6>AED 249</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Refreshing Packages</h4>
                  <h4>60Min Choice of Massage + 3 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE </p>
                  <p>THAI MASSAGE  </p>
                  <p>REFLEXOLOGY </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                </Col>
                <Col>
                  <h6>AED 349</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='service_seventh_sec'>
        <Container>
          <Row>
            <Col>
              <h2>Leisure Packages</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col>
                  <h4>Luxurious Services</h4>
                  <h4>60Min Choice of Massage + 5 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE</p>
                  <p>THAI MASSAGE </p>
                  <p>REFLEXOLOGY  </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                  <p>FINE LINES FACIAL MASSAGE</p>
                  <p>HEAD MASSAGE </p>
                  <p>FOOT MASSAGE </p>
                </Col>
                <Col>
                  <h6>AED 249</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Refreshing Packages</h4>
                  <h4>60Min Choice of Massage + 3 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE </p>
                  <p>THAI MASSAGE  </p>
                  <p>REFLEXOLOGY </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                </Col>
                <Col>
                  <h6>AED 349</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='service_eigth_sec'>
        <Container>
          <Row>
            <Col>
              <h2>Leisure Packages</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col>
                  <h4>Luxurious Services</h4>
                  <h4>60Min Choice of Massage + 5 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE</p>
                  <p>THAI MASSAGE </p>
                  <p>REFLEXOLOGY  </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                  <p>FINE LINES FACIAL MASSAGE</p>
                  <p>HEAD MASSAGE </p>
                  <p>FOOT MASSAGE </p>
                </Col>
                <Col>
                  <h6>AED 249</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Refreshing Packages</h4>
                  <h4>60Min Choice of Massage + 3 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE </p>
                  <p>THAI MASSAGE  </p>
                  <p>REFLEXOLOGY </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                </Col>
                <Col>
                  <h6>AED 349</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='service_ninth_sec'>
        <Container>
          <Row>
            <Col>
              <h2>Leisure Packages</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col>
                  <h4>Luxurious Services</h4>
                  <h4>60Min Choice of Massage + 5 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE</p>
                  <p>THAI MASSAGE </p>
                  <p>REFLEXOLOGY  </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                  <p>FINE LINES FACIAL MASSAGE</p>
                  <p>HEAD MASSAGE </p>
                  <p>FOOT MASSAGE </p>
                </Col>
                <Col>
                  <h6>AED 249</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h4>Refreshing Packages</h4>
                  <h4>60Min Choice of Massage + 3 Add on Services</h4>
                  <h4>Massage Choice:</h4>
                  <p>RELAXATION </p>
                  <p>DEEP TISSUE </p>
                  <p>SPORT MASSAGE </p>
                  <p>THAI MASSAGE  </p>
                  <p>REFLEXOLOGY </p>
                  <p>AROMATHERAPY </p>
                  <p>POST NATAL MASSAGE </p>
                </Col>
                <Col>
                  <h4>Add On</h4>
                  <p>EAR CANDLING  </p>
                  <p>BODY EXFOLIATION </p>
                  <p>RADIANT GLOW FACIAL </p>
                </Col>
                <Col>
                  <h6>AED 349</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Services