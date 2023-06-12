import React from 'react';
import "./Subfooter.scss";
import { Link } from 'react-router-dom';

const Subfooter = () => {
  return (
	<>
		<div className='subfooter_wrapper'>
		<div className="tp-footer-copyright-area">
                        <div className="subfooter">
                            <div className="col-md-12 col-lg-5">
                                <div className="tp-footer-copyright-inner content">
                                <div>© Copyright © 2023 Spa & Salon. All Rights Reserved. </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                <div className="tp-footer-copyright-inner footer_nav">
                                <Link href="#" className='nav_link'>Terms and conditions</Link>
                                <Link className="nav_link" href="#"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
		</div>
	</>
  )
}

export default Subfooter