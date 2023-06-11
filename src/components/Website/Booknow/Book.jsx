import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Book.scss";
import Card from "react-bootstrap/Card";

const Book = () => {
  return (
    <>
      <section className="book_now_top">
        <Container>
          <Row>
            <Col>
              <h2 className="select_heading">Select Services</h2>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="book_now_section">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col></Col>
              </Row>
              <Row>
                <Col className="card_col">
                  <Card style={{ width: "28rem" }}>
                    
                    <Card.Body>
                      
                      <Card.Text>
                        Some quick example text to build on the card title and
                        
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={6} sm={12}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Book;
