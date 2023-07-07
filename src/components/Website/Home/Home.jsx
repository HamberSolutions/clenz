import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import Subfooter from "../../Common/Subfooter/Subfooter";
import Photo3 from "../../../assets/images/photo-3.png";
import Photo5 from "../../../assets/images/photo-5.png";
import Photo4 from "../../../assets/images/photo-4.jpg";
import Photo6 from "../../../assets/images/photo-7.jpg";
import Photo7 from "../../../assets/images/photo7.png";
import Photo8 from "../../../assets/images/photo8.jpg";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import image from "../../../assets/images/whatsapp.png"
import Slider from "react-slick";
import { padding } from "@mui/system";
// import Faq from "../../FAQ/Faq";

const Home = () => {
  var settings = {
    
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
        }
      }
    ]
  };
  return (
    <>
      <Header />
      <div className="whatsapp_div">
        <Link to="/">
          <img className="whatsapp_image" src={image} />
        </Link>
      </div>
      <section className="home_first-sec">
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12} style={{padding:"0px"}}>
            <Slider {...settings}>
          <div>
          <img className="home_main_img" src={Photo5} />
          </div>
          <div>
          <img className="home_main_img" src={Photo7} />
          </div>
          <div>
          <img className="home_main_img" src={Photo8} />
          </div>
         
        </Slider>
              
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home_second_section">
        <Container>
          <Row>
            <Col>
              <h1>Welcome to Clenz Saloon & Spa</h1>
              <p className="spa-message">
                We are a complete massage therapy & hair cutting based in Abu
                Dhabi. Relax and rejuvenate with a 60-minutes & more massage
                session.
              </p>
            </Col>
          </Row>
          <Row className="third_row">
            <Col lg={4} md={4} sm={12}>
              <img className="pic_1" src={Photo4} />
            </Col>
            <Col lg={4} md={4} sm={12}>
              <img className="home_icons" src={icon1} />
              <h3 className="book_heading">Book Massage</h3>
              <p>
                Book your massage online and view orthopedic massage therapy
                pricing.
              </p>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <img className="pic_1" src={Photo3} />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <img className="home_icons" src={icon2} />
              <h3 className="book_heading">Beauty Essentials</h3>
              <p>
                We provide customized treatments, facials, and massages based on
                your skin type. You can trust us to be your spa in Abu Dhabi.
              </p>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <img className="pic_1" src={Photo6} />
            </Col>
            <Col lg={4} md={4} sm={12}>
              <img className="home_icons" src={icon3} />
              <h3 className="book_heading">Wellness Retreats</h3>
              <p>
                Relax and unwind your body & mind with a soothing massage. Take
                a break & have a well-deserved 'You Time' with us!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home_third_section">
        <Container>
          <Row>
            <Col>
              <h2 className="incredible_heading">
                Clenz Spa & Saloon Provides Incredible Service's & Experience
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home_fourth_section">
        <Container>
          <Row>
            <Col className="left_col" lg={6} md={6} sm={12}>
              <h3 className="therapy_heading">
                Massage Therapies <br /> & <br /> Body Treatment
              </h3>
            </Col>
            <Col lg={6} m={6} sm={12}>
              <h1 className="pormt_heading">
                Spa <br /> Promotions
              </h1>
              <p className="discount_text">
            
                Enjoy a rejuvenating 60 or 90 minute spa therapy at a <br />
                10% discount!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home_fifth_section">
        <Container>
          <Row className="">
            <Col>
              <h1 className="packages_heading"> Packages & Pricing</h1>
            </Col>
			
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card className="card_data">
                <Card.Img variant="top" src={Photo3} />
                <Card.Body>
                  <Card.Title>Relaxation Massage</Card.Title>
                  <Card.Text>
                  	Forget Your Stress And Relax At Clenz Spa & Saloon in Abu Dhabi
                  </Card.Text>
				  <Card.Text>
                  	AED. 249 / 60 minutes session
                  </Card.Text>

                  <Link to="/services"><Button className="card_buttons" variant="primary">Book Now</Button></Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={4} sm={12}>
			<Card className="card_data">
                <Card.Img variant="top" src={Photo7} />
                <Card.Body>
                  <Card.Title>Couple Massage</Card.Title>
                  <Card.Text>
				  Leave your worries and distractions behind and focus on the present moment with your partner
                  </Card.Text>
				  <Card.Text>
                  	AED. 449 / 60 minutes session
                  </Card.Text>

                  <Link to="/services"><Button className="card_buttons" variant="primary">Book Now</Button></Link>
                </Card.Body>
              </Card>
			</Col>
            <Col lg={4} md={4} sm={12}>
			<Card  className="card_data">
                <Card.Img variant="top" src={Photo8} />
                <Card.Body>
                  <Card.Title>Clenz Signature</Card.Title>
                  <Card.Text>
				  It's a combination or traditional hot stone and ventosa therapy.
                  </Card.Text>
				  <Card.Text>
                  	AED. 449 / 90 minutes session
                  </Card.Text>

                 <Link to="/services"> <Button className="card_buttons" variant="primary">Book Now</Button></Link>
                </Card.Body>
              </Card>
			</Col>
          </Row>
		  <Row>
		  <Col>
	  		<div className="view_div">
	  			<Link to="/services" className="view">See All</Link>
				  </div>
			</Col>
		  </Row>
        </Container>
      </section>
      {/* <Faq /> */}
      <Footer />
      <Subfooter />
    </>
  );
};

export default Home;
