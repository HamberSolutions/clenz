import React from 'react'
import "./Services.scss"
import Header from "../../Common/Header/Header";
import { Col, Container, Row } from 'react-bootstrap';
const Services = () => {
  return (
	<>
    <Header />
    <section className='service_first_sec'>
      <Container>
        <Row>
          <Col>
              <h1 className='service_heading'>Services We Offer</h1>
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
  </>
  )
}

export default Services