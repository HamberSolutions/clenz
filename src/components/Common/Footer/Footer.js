import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className='Footer_wrapper'>
        <div className="page-footer text-center text-md-left pt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <h5 className="text-uppercase font-weight-bold mb-4">Spa & Salon</h5>
                <p>Here you can use rows and columns here to organize your footer content.</p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#!">Link 1</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#!">Link 1</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#!">Link 1</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </div>

              <hr className="w-100 clearfix d-md-none" />
              
              <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Links</h5>
                <ul className="list-unstyled">
                  <li><a href="#!">Link 1</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
