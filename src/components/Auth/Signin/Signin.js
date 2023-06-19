import React from "react"; 
import "./Signin.scss";
import { Col, Container, Row } from "react-bootstrap";


const Signin = () => {
  return (
    <>
    <form>
      <section>
        <Container fluid className="main_wrapper_signin">
          <Row>
            <Col lg={6} md={6} sm={12} className="left_col">

            </Col>
            <Col lg={6} md={6} sm={12} className="right_col">
              <Row>
                <Col>
                  <div>
                    <h1 className="signin_text"> Sign In </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="field_div">
                    <label className="field_name">Enter Email</label>
                    <input className="input_field" type="text" placeholder="Enter Email" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="field_div">
                    <label className="field_name">Enter Password</label>
                    <input className="input_field" type="text" placeholder="Enter Password" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <input type="submit" className="signin_btn" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      </form>
    </>
  );
};

export default Signin;
