import React, { useState } from "react";
import Logo from "../../../assets/images/clenz.png";
import "./header.css";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = ({ showF }) => {

  const [FCard, setFCard] = useState(false)
  const navigate = useNavigate();
  return (
    <>
      <div className="header-section dis2">
        <div className="logo_div">
          <img className="logo" src={Logo} alt="logo"></img>


        </div>
        <div className="nav_links">
          <Link className="nav_links" to="/"><div>Home</div></Link>
          <div><NavLink className="nav_links" to="/about-us">About-Us</NavLink></div>
          <div><NavLink className="nav_links" to="/contact-us">Contact-Us</NavLink></div>
          <div><NavLink className="nav_links" to="/services">Services</NavLink></div>
          <div><NavLink className="nav_links" to="/faq">FAQs</NavLink></div>
        </div>
        <div className="buttons_div d-flex">
          {showF ?
            <div className="search_page_f" onClick={() => setFCard(!FCard)}>F</div>
            :
            <div>
              <button
                onClick={() => navigate("/login")}
                className="button_1"
                type="button"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/register")}
                className="button_2">
                Sign Up
              </button>
            </div>}
        </div>
      </div>

      <div className="mob_nav dis-mob2">
        <Navbar className="bg_color" bg="light" expand="lg">
          <Container fluid className="nav_padding">
            <Navbar.Brand href="#home">
              <div className="mob_logo">
                <img className="logo" width={60} src={Logo} alt="logo"></img>
                {/* <div className="title">Makan Manager</div> */}
              </div>
            </Navbar.Brand>
            <Navbar.Toggle style={{background:"#FFFFFF"}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  {" "}
                  <div className="mob_buttons">

                    <button
                      onClick={() => navigate("/login")}
                      className="button_1"
                      type="button"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => navigate("/register")}
                      className="button_2">
                      Sign Up
                    </button>
                  </div>
                  <div className="nav_links_mob">
                    <Link className="nav_links_mob" to="/"><div>Home</div></Link>
                    <div><NavLink className="nav_links_mob" to="/about-us">About-Us</NavLink></div>
                    <div><NavLink className="nav_links_mob" to="/contact-us">Contact-Us</NavLink></div>
                    <div><NavLink className="nav_links_mob" to="/services">Services</NavLink></div>
                    <div><NavLink className="nav_links_mob" to="/faq">FAQ</NavLink></div>
                  </div>

                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
