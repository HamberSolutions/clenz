import React, { useState, useEffect } from "react";
import "./Services.scss";
import Header from "../../Common/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import service1 from "../../../assets/images/Service-1.jpg";
import Footer from "../../Common/Footer/Footer";
import Subfooter from "../../Common/Subfooter/Subfooter";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import dayjs from 'dayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TiTick } from 'react-icons/ti';
=======
import moment from "moment";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import { TiTick } from "react-icons/ti";
>>>>>>> e32f3332d625859dde3deedf0953d2c4bdb45491
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { orderbook } from "../../../features/dashboard/dashboardSlice";

const dateFormat = "YYYY-MM-DD";

const packages = [
  { id: 1, name: 'Package 1', value: 10 },
  { id: 2, name: 'Package 2', value: 20 },
  { id: 3, name: 'Package 3', value: 30 },
  { id: 4, name: 'Package 4', value: 40 },
  { id: 5, name: 'Package 5', value: 50 },
  { id: 6, name: 'Package 6', value: 60 },
  { id: 7, name: 'Package 7', value: 70 },
  { id: 8, name: 'Package 8', value: 80 },
  { id: 9, name: 'Package 9', value: 90 },
  { id: 10, name: 'Package 10', value: 100 },
  // Add more packages as needed
];

const Services = () => {

// *** start ***



const [selectedPackages, setSelectedPackages] = useState([]);
const [totalValue, setTotalValue] = useState(0);

const handleClick = (packageData) => {
  if (selectedPackages.some(packageItem => packageItem.id === packageData.id)) {
    // Unselect the package if it's already selected
    const updatedPackages = selectedPackages.filter(packageItem => packageItem.id !== packageData.id);
    setSelectedPackages(updatedPackages);
    recalculateTotalValue(updatedPackages);
  } else if (selectedPackages.length < 6) {
    // Select the package if it's not selected and the limit is not reached
    const updatedPackages = [...selectedPackages, packageData];
    setSelectedPackages(updatedPackages);
    recalculateTotalValue(updatedPackages);
  }
};

const recalculateTotalValue = (packages) => {
  const total = packages.reduce((acc, packageItem) => acc + packageItem.value, 0);
  setTotalValue(total);
};

const renderPackages = () => {
  return packages.map(packageData => {
    const isSelected = selectedPackages.some(packageItem => packageItem.id === packageData.id);
    return (
      <div
        key={packageData.id}
        onClick={() => handleClick(packageData)}
        className={isSelected ? 'selected' : ''}
      >
        {packageData.name}
      </div>
    );
  });
};

// end







  const [date, setDate] = useState("");
  console.log(date);
  const location = useLocation(); // Use useLocation to access location object
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/login";
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    selectedDateTimeData("", dayjs(selectedDate?.$d).format("YYYY-MM-DD"));
  }, [selectedDate]);

<<<<<<< HEAD
  
  const currentDateTimeData = async(formattedDate) => {
    const date = formattedDate; // Separate date (formatted)
    setDate(date);
    // Extract time from selectedDate
    const hours = selectedDate?.toDate().getHours();
    const minutes = selectedDate?.toDate().getMinutes();
    const time = `${hours}:${minutes}`; // Separate time

    // Log separate date and time
    console.log("Date:", date);
    console.log("Time:", time);
   
  }

 const selectedDateTimeData = async (formattedDate) => {
  const date = formattedDate; // Separate date (formatted)

  // Extract time from selectedDate
  const hours = selectedDate?.toDate().getHours();
  const minutes = selectedDate?.toDate().getMinutes();
  const time = `${hours}:${minutes}`; // Separate time

  setDate(date); // Update the date state with the new value

  // Log separate date and time
  console.log("Date:", date);
  console.log("Time:", time);
};


  const [sharedData, setSharedData] = useState([]);
  

  // const handleClick = (data) => {
  //   setSharedData([...sharedData, data]);
  // };
=======
  const [sharedData, setSharedData] = useState([]);
  const [currentPrice, setCurrentPrice]= useState(0)

  const handleClick = (data, price) => {
    setSharedData([data]);
    setCurrentPrice(price)
  };
>>>>>>> e32f3332d625859dde3deedf0953d2c4bdb45491


  const [isVisible, setIsVisible] = useState(false);

  const toggleIcon = () => {
    setIsVisible(!isVisible);
  };

<<<<<<< HEAD
  const orderData = {
    userId: "649723d5600c9f09eb01d074",
    service: ["klkl", "qwqwq"],
    date: date,
    time: selectedDateTimeData.time,
    price: 1400,
    slotNumber: "5"
  };
  console.log("Order Data:", orderData);
  const handleBookNow = (orderData) => {
    dispatch(orderbook(orderData));
  };

=======
  const handleBookNow = async (e) => {
    e.preventDefault();

    const orderData = {
      userId: localStorage.getItem("userId"),
      service: sharedData,
      date: date,
      time: time,
      price: currentPrice,
    };
    console.log("orderData", orderData);

    await dispatch(orderbook(orderData)).unwrap();
  };    
  console.log(currentPrice)
>>>>>>> e32f3332d625859dde3deedf0953d2c4bdb45491
  return (
    <>
      <Header />
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
              <h1 className="services_heading">Services We Offer</h1>
            </Col>
          </Row>

          <Row>
            <Col lg={7} md={7} sm={12}>
            {renderPackages()}
            </Col>
            {/* <Col lg={7} md={7} sm={12}>
              <Row>
                <Col>
                  <h2 className="All_headings">Featured</h2>
                </Col>
              </Row>
              <div className="back_div">
                <Row>
                  <Col lg={1} md={1} sm={1}>
                    <Button
<<<<<<< HEAD
                      onClick={() =>
                        { toggleIcon();
=======
                      onClick={() => {
                        toggleIcon();
                        handleClick(
                          <div>
                            {!isVisible && (
                              <>
                                <Col>
                                  <h4 className="headings">
                                    Relaxation Massage
                                  </h4>
                                  <p className="time_headings">
                                    60 minutes session
                                  </p>
                                </Col>
                                <Col>
                                  <h6 className="price">AED 249</h6>
                                </Col>
                              </>
                            )}
                          </div>
                        );
                      }}
                      className="select_btn"
                    >
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
                        {isVisible && <TiTick color="black" size={"30px"} />}
                      </div>
                    </Button>
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
                    <Button
                      onClick={() => {
                        toggleIcon();
                        handleClick(
                          <div>
                            {!isVisible && (
                              <>
                                <Col>
                                  <h4 className="headings">
                                    Relaxation Massage
                                  </h4>
                                  <p className="time_headings">
                                    90 minutes session
                                  </p>
                                </Col>
                                <Col>
                                  <h6 className="price">AED 349</h6>
                                </Col>
                              </>
                            )}
                          </div>
                        );
                      }}
                      className="select_btn"
                    >
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
                        {isVisible && <TiTick color="black" size={"30px"} />}
                      </div>
                    </Button>
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
                  <Col lg={1} md={1} sm={1}>
                    <Button
                      onClick={() => {
                        toggleIcon();
>>>>>>> e32f3332d625859dde3deedf0953d2c4bdb45491
                        handleClick(
                          <div>
                            {!isVisible && (
                              <>
                            <Col>
                              <h4 className="headings">Relaxation Massage</h4>
                              <p className="time_headings">
                                60 minutes session
                              </p>
                            </Col>
                            <Col>
                              <h6 className="price">AED 249</h6>
                            </Col>
                            </>
                            )}
                          </div>
<<<<<<< HEAD
                        );
                        }
                      }
                      className="select_btn"
                    ><div style={{width:"30px", height:"30px", display:"flex", justifyContent:"center", alignItems:"center", position:"absolute", top:"0px", left:"0px"}}>{isVisible && <TiTick color="black" size={"30px"}/>}</div></Button>
                    
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
                    <Button onClick={() =>
                      handleClick(<div><Col >
                        <h4 className="headings">Relaxation Massage</h4>
                        <p className="time_headings">90 minutes session</p>
                      </Col>
                        <Col >
                          <h6 className="price">AED 349</h6>
                        </Col></div>)} className="select_btn"></Button>
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
=======
                        )
                      }}
                      className="select_btn"
                    >  <div
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
                    {isVisible && <TiTick color="black" size={"30px"} />}
                  </div></Button>
>>>>>>> e32f3332d625859dde3deedf0953d2c4bdb45491
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
<<<<<<< HEAD
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
=======
                  <Col lg={1} md={1} sm={1}>
                    <Button
                      onClick={() =>{

                        handleClick(
                          <div>
                            <Col>
                              <h4 className="headings">
                                MADEROTHERAPHY ANTI CELLULITE(wooden treatment)
                              </h4>
                              <p className="time_headings">
                                {" "}
                                60 minutes session
                              </p>
                            </Col>
                            <Col>
                              <h6 className="price">AED 299</h6>
                            </Col>
                          </div>
                        );
                        setCurrentPrice(299);
                      }
                      }
                      className="select_btn"
                    ></Button>
>>>>>>> e32f3332d625859dde3deedf0953d2c4bdb45491
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
                            <p className="time_headings">2 therapist on 1 client</p>
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
                    <p className="time_headings">2 therapist on 1 client</p>
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
            </Col> */}
            <Col lg={5} md={5} sm={12} className="right_col">
              <div id="servicescroll" className="ticket_back_div">
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
                      <h6 className="show_data">
                         {/* {sharedData.map((data, index) => (
                        <div key={index}>{data}</div>
                      ))} */}
                      Selected Packages: {selectedPackages.map(packageItem => packageItem.name).join(', ')}
                      </h6>
                    </Col>
                  </Row>
                </div>
                <div className="price_line_div"></div>
                <Row>
                  <Col>
<<<<<<< HEAD
                    <h5 className="total">Total : {totalValue}</h5>
=======
                    <h5 className="total">Total: AED {currentPrice}</h5> 
>>>>>>> e32f3332d625859dde3deedf0953d2c4bdb45491
                  </Col>
                  <Col>
                    <LocalizationProvider className="date_layout" dateAdapter={AdapterDayjs}>
                      
                          <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} format={dateFormat} value={selectedDate?selectedDate:dayjs()}  onChange={value => setSelectedDate(value)} />
                   
                    </LocalizationProvider>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <button className="right_book_btn" onClick={handleBookNow}>Book Now</button>
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
    </>
  );
};

export default Services;

