import React from 'react';
import './Footer.scss';

import Logo from "../../../assets/images/Logo1.png";
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram,BsWhatsapp  } from 'react-icons/bs';

const Footer = () => {

  const facebookPageUrl = 'https://www.facebook.com/profile.php?id=100090974179455&mibextid=LQQJ4d';
  const instagramPageUrl = 'https://instagram.com/clenzbeautycenterspa?igshid=YzcxN2Q2NzY0OA==';
  return (
    <>
      <div className='Footer_wrapper'>
        <div className="page-footer text-center text-md-left pt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
              <img className="logo" src={Logo} alt="logo" />
                <p className='pt-3 footer_text'>We provide customized treatments, facials, and massages based on your skin type. You can trust us to be your spa in Abu Dhabi.</p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Pages</h5>
                <ul className="list-unstyled">
                  <li className='footer_li'><Link className='footer_menu' to="/">Home</Link></li>
                  <li className='footer_li'><Link className='footer_menu' to="/about-us">About Us</Link></li>
                  <li className='footer_li'><Link className='footer_menu' to="/contact-us">Contact Us</Link></li>
                  <li className='footer_li'><Link className='footer_menu' to="/services">Services</Link></li>
                  {/* <li className='footer_li'><Link className='footer_menu' to="/faq">FAQ</Link></li> */}
                </ul>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Social Media</h5>
                <ul className="list-unstyled">
                  <li className='social_li'><a   href={facebookPageUrl} target="_blank" rel="noopener noreferrer" className='social_name'> <BsFacebook className='social_icons' />  Facebook</a></li>
                  <li className='social_li'><a href={instagramPageUrl} target="_blank" rel="noopener noreferrer" className='social_name'> <BsInstagram className='social_icons' /> Instagram</a></li>
                  {/* <li className='social_li'><Link to="/" className='social_name'> <BsWhatsapp className='social_icons' />  Whatsapp</Link></li> */}
                  
                </ul>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-lg-3 col-md-6 col-sm-12 mx-auto">
                
               <input className='footer_input' type='text' placeholder='Enter Email Address'/>
              </div>

             
              
            

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
