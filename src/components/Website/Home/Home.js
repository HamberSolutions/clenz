import React from 'react';
import "./Home.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import Subfooter from '../../Common/Subfooter/Subfooter';
import Photo1 from "../../../assets/images/photo-1.jpg";
import Photo5 from "../../../assets/images/photo-5.jpg";

const Home = () => {
	return (
		<>
			<div className='home_section'>
				<div className='header_wraper'>
					<Header />
					{/* <div className='sub_header'>
						<button className="packages">Packages</button>
						<button className="book_now">Book Now</button>
					</div> */}
				</div>
				<div className='main_body'>
					{/* <div className='page_header'>
						<div className='header_text'>Home</div>
						<div className='header_divider'></div>
					</div> */}
					<div className='photos_div'>
						{/* <div className='left_div'><img className='pic_box_1' src={Photo1}></img></div> */}
						<div className='left_div'><img className='pic_box_1' src={Photo5}></img></div>
						{/* <div className='right_div'>
							<img className='pic_box_2' src={Photo1}></img>
							<img className='pic_box_3' src={Photo1}></img>
						</div> */}
					</div>
					<div className='photos_div'>
						<div className='left_div'><img className='pic_box_1' src={Photo1}></img></div>
						{/* <div className='left_div'><img className='pic_box_1' src={Photo3}></img></div> */}
						{/* <div className='right_div'>
							<img className='pic_box_2' src={Photo1}></img>
							<img className='pic_box_3' src={Photo1}></img>
						</div> */}
					</div>
					
				</div>
				<Footer />
				<Subfooter />
			</div>
		</>
	)
}

export default Home

