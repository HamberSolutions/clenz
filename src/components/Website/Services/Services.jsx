import React, { useState, useEffect } from "react";
import "./Services.scss";
import Header from "../../Common/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import service1 from "../../../assets/images/Service-1.jpg";
import Footer from "../../Common/Footer/Footer";
import Subfooter from "../../Common/Subfooter/Subfooter";
import { Link } from "react-router-dom";
import moment from "moment";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { orderbook } from "../../../features/dashboard/dashboardSlice";
import whatsappimage from "../../../assets/images/whatsapp.png";

import  { useRef } from 'react';
// import './SmoothScroll.css';

const dateFormat = "YYYY-MM-DD";


const Services = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setDate(moment(selectedDate?.$d).format("YYYY-MM-DD"));
    setTime(moment(selectedDate?.$d).format("hh:mm:ss a"));
  }, [selectedDate]);


  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleClick = (data, price) => {
    const isSelected = selectedItems.includes(data);

    if (isSelected) {
      // Item is already selected, remove it and subtract the price
      const updatedItems = selectedItems.filter(item => item !== data);
      const newCurrentPrice = currentPrice - price;

      setSelectedItems(updatedItems);
      setCurrentPrice(newCurrentPrice);
    } else {
      // Item is not selected, add it and add the price
      const updatedItems = [...selectedItems, data];
      const newCurrentPrice = currentPrice + price;

      setSelectedItems(updatedItems);
      setCurrentPrice(newCurrentPrice);
    }
  };

  const handleBookNow = async (e) => {
    e.preventDefault();
console.log("user id", localStorage.getItem("userId"))
    const orderData = {
      userId: localStorage.getItem("userId"),
      service: selectedItems,
      date: date,
      time: time,
      price: currentPrice,
    };
    console.log("orderData", orderData);

    await dispatch(orderbook(orderData)).unwrap();
  };
  console.log(currentPrice)


  // scroller 
  
    const scrollRef = useRef(null);
  
    const handleScroll = () => {
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

  return (
    <div className="services_back">
      <Header />

      <div className="whatsapp_div">
        <a href="https://wa.me/971508774398/">
          <img className="whatsapp_image" src={whatsappimage} />
        </a>
      </div>
      <div className="scroll_div">
        
              <div className="ser">46 Services Available</div>
            
                <button className="scroll_button" onClick={handleScroll}>Book Now</button>
            
           
       
      </div>

      <section className="services_first-sec">
        <Container fluid>
          <Row>
            <Col style={{ padding: "0px" }}>
              <img className="services_main_img" src={service1} alt="in" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services_second_sec">
        <Container>
          <Row>
            <Col>
              <h1 className="services_heading">Best Services in Abu Dhabi</h1>
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
                  <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Relaxation Massage - 60 minutes", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Relaxation Massage - 60 minutes") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9} >
                  <div className="item-details">
                    <h4 className="headings">Relaxation Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                    
                  </div>
                  </Col>
                  <Col lg={2} md={2} sm={2}  >
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                
{/* done */}

                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Relaxation Massage - 90 minutes", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Relaxation Massage - 90 minutes") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                  <div className="item-details">
                    <h4 className="headings">Relaxation Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                    
                  </div>
                  </Col>
                  <Col lg={2} md={2} sm={2}>
                  <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                {/* Done */}
                
                
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Deep Tissue Massage- 60 minutes", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Deep Tissue Massage- 60 minutes") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Deep Tissue Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Deep Tissue Massage- 90 minutes", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Deep Tissue Massage- 90 minutes") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Deep Tissue Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>

                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                   <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Couple Massage- 60 minutes each session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("Couple Massage- 60 minutes each session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Couple Massage</h4>
                    <p className="time_headings"> 60 minutes each session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>


                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                    <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("MADEROTHERAPHY ANTI CELLULITE(wooden treatment)- 60 minutes", 299)}>
                    <div className="select_btn">
                      {selectedItems.includes("MADEROTHERAPHY ANTI CELLULITE(wooden treatment)- 60 minutes") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>


                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                    <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Clenz Signature Massage-120 minutes", 549)}>
                    <div className="select_btn">
                      {selectedItems.includes("Clenz Signature Massage-120 minutes") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                  <h4 className="headings">Clenz Signature Massage</h4>
                    <p className="time_headings"> 120 minutes session</p>
                  </Col>
                  <Col>
                  <h6 className="price">AED 549</h6>
                  </Col>
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                     <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Luxurious Services- 2hr 30 minutes", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("Luxurious Services- 2hr 30 minutes") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Refreshing Packages- 120 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Refreshing Packages- 120 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Group of Faith Special- 3hr 45 min, 2 services", 849)}>
                    <div className="select_btn">
                      {selectedItems.includes("Group of Faith Special- 3hr 45 min, 2 services") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("The Star of Clenz Spa- 120 minutes session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("The Star of Clenz Spa- 120 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Solemen Prayer Massage- 105 minutes session", 299)}>
                    <div className="select_btn">
                      {selectedItems.includes("Solemen Prayer Massage- 105 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Under The Lanterns Special- 105 minutes session ", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Under The Lanterns Special- 105 minutes session ") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Crescent Mood Massage- 105 minutes session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("Crescent Mood Massage- 105 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Deep Tissue Massage- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Deep Tissue Massage- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings"> Deep Tissue Massage </h4>
                    <p className="time_headings">90 Minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Relaxation Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Relaxation Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Relaxation</h4>
                    <p className="time_headings">60 Minutes session </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Lymphatic Drainage Massage- 90 minutes massage", 399)}>
                    <div className="select_btn">
                      {selectedItems.includes("Lymphatic Drainage Massage- 90 minutes massage") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Lymphatic Drainage Massage </h4>
                    <p className="time_headings">90 minutes session </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 399</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Maderotherapy Slimming(wood traetment)- 90 minutes session", 399)}>
                    <div className="select_btn">
                      {selectedItems.includes("Maderotherapy Slimming(wood traetment)- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Lymphatic Drainage Massage- 60 minutes session", 279)}>
                    <div className="select_btn">
                      {selectedItems.includes("Lymphatic Drainage Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Lymphatic Drainage Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 279</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Hotstone & Relax- 45 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Hotstone & Relax- 45 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">HotStone & Relax </h4>
                    <p className="time_headings"> 45 minutes session</p>
                  </Col>
                  <Col className="price">AED 249</Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Cupping & Relax- 45 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Cupping & Relax- 45 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">45 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("lymphatic Drainage Massage- 45 minutes session", 199)}>
                    <div className="select_btn">
                      {selectedItems.includes("lymphatic Drainage Massage- 45 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Lymphatic Drainage Massage</h4>
                    <p className="time_headings">45 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 199</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Mediotherapy Anti Cellulite- 60 minutes ", 299)}>
                    <div className="select_btn">
                      {selectedItems.includes("Mediotherapy Anti Cellulite- 60 minutes ") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Pre & Post Natal Massage- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Pre & Post Natal Massage- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Pre & Post Natal Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Pre & Post Natal Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Pre & Post Natal Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Pre & Post Natal Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Slimming Massage- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Slimming Massage- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Slimming Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Slimming Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Slimming Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Slimming Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Reflexology Massage- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Reflexology Massage- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Reflexology Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Reflexology Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Reflexology Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Reflexology Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Sports Massage- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Sports Massage- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Sports Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Sports Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Sports Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Sports Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Hot Oil Massage Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Hot Oil Massage Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Hot Oil Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Traditional Thai Massage- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Traditional Thai Massage- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Traditional Thai Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Traditional Thai Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Traditional Thai Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Traditional Thai Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Aroma Therapy  Massage- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Aroma Therapy  Massage- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Aroma Therapy Massage</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Aroma Therapy Massage- 60 minutes session", 249)}>
                    <div className="select_btn">
                      {selectedItems.includes("Aroma Therapy Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Aroma Therapy Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 249</h6>
                  </Col>
                  </div>
                </Row>

                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("4 Hands Massage- 60 minutes session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("4 Hands Massage- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">4 Hands Massage</h4>
                    <p className="time_headings">60 minutes session</p>
                    <p className="time_headings">2 therapist on 1 client</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Couple Massage- 120 minutes session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("Couple Massage- 120 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Couple Massage (60 minutes)</h4>
                    <p className="time_headings">120 minutes . 2 Services </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Couple Massage- 180 minutes session", 549)}>
                    <div className="select_btn">
                      {selectedItems.includes("Couple Massage- 180 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Couple Massage (90 minutes)</h4>
                    <p className="time_headings">180 minutes . 2 Services </p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 549</h6>
                  </Col>
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Cupping & Relax- 60 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Cupping & Relax- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Cupping & Relax</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Hotstone  & Relax- 60 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Hotstone  & Relax- 60 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Hotstone & Relax</h4>
                    <p className="time_headings">60 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 349</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Full Body Scrub & Relax- 90 minutes session", 349)}>
                    <div className="select_btn">
                      {selectedItems.includes("Full Body Scrub & Relax- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Cupping & Relax- 90 minutes session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("Cupping & Relax- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Hotstone & Relax- 90 minutes session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("Hotstone & Relax- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Ear Candling- 20 minutes session", 49)}>
                    <div className="select_btn">
                      {selectedItems.includes("Ear Candling- 20 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Ear Candling</h4>
                    <p className="time_headings">20 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 49</h6>
                  </Col>
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Body Scrub- 30 minutes session", 99)}>
                    <div className="select_btn">
                      {selectedItems.includes("Body Scrub- 30 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Body Scrub</h4>
                    <p className="time_headings">30 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 99</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Head Massage- 30 minutes session", 99)}>
                    <div className="select_btn">
                      {selectedItems.includes("Head Massage- 30 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Head Massage</h4>
                    <p className="time_headings">30 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 99</h6>
                  </Col>
                  </div>
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
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Clenz Signature- 90 minutes session", 449)}>
                    <div className="select_btn">
                      {selectedItems.includes("Clenz Signature- 90 minutes session") && (
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            
                          }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <h4 className="headings">Clenz Signature</h4>
                    <p className="time_headings">90 minutes session</p>
                  </Col>
                  <Col>
                    <h6 className="price">AED 449</h6>
                  </Col>
                  </div>
                </Row>
                <div className="line_div"></div>
                <Row>
                <div className="mobile_columns">
                  <Col lg={1} md={1} sm={1}>
                  <button style={{borderRadius:"30px", border:"1px solid aliceblue"}} onClick={() => handleClick("Clenz Signature Massage- 120 minutes session", 549)}>
                    <div className="select_btn">
                      {selectedItems.includes("Clenz Signature Massage- 120 minutes session") && (
                        <div 
                        style={{
                          width: "30px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          top: "0px",
                          left: "0px",
                        }}
                        >
                          <TiTick color="black" size={"30px"} />
                        </div>
                      )}
                    </div>
                  </button>
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
                  </div>
                </Row>
                <div className="line_div"></div>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12} className="right_col">
              <div id="servicescroll" className="ticket_back_div  scroll-target"  ref={scrollRef}>
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
                      <h4 className="show_data">
                        {" "}
                        {selectedItems.slice(0, 6).map((data, index) => (
                          <div key={index}>{data}</div>
                        ))}
                      </h4>
                    </Col>
                  </Row>
                </div>
                <div className="price_line_div"></div>
                <Row>
                  <Col>
                    <h5 className="total">Total: AED {currentPrice}</h5>
                  </Col>
                  <Col>
                    <LocalizationProvider
                      className="date_layout"
                      dateAdapter={AdapterDayjs}
                    >
                      <StaticDateTimePicker
                        defaultValue={moment("YYYY-MM-DD")}
                        format={dateFormat}
                        value={selectedDate ? selectedDate : dayjs()}
                        onChange={(value) => setSelectedDate(value)}
                      />
                    </LocalizationProvider>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <button
                        className="right_book_btn"
                        onClick={handleBookNow}
                      >
                        Book Now
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
      <Subfooter />
    </div>
  );
};

export default Services;
