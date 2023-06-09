import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import "./Signup.scss";
const Signup = () => {
  return (
	<>
    <form>
      <section>
        <Container fluid className='main_wrapper_signup'>
          <Row>
            <Col lg={6} md={6} sm={12} className='left_col'>
            </Col>
            <Col lg={6} md={6} sm={12} className='right_col'>
              <Row>
                <Col>
                  <div>
                    <h1 className='signup_text'>
                      Sign Up
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className='field_label'>User Name</label> <br/>
                  <input className='input_field' type='text' placeholder='User Name' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className='field_label'>Enter Email </label><br/>
                  <input className='input_field' type='text' placeholder='Enter Email' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className='field_label'>Contact Number </label><br/>
                  <input className='input_field' type='text' placeholder='Contact Number' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className='field_label'>Enter Password </label><br/>
                  <input className='input_field' type='text' placeholder='Enter Password' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input className='signup_btn' type='submit' />
                </Col>
              </Row>
              <Row>
                <Col>
                
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </form>
  </>
  )
}

export default Signup