import React from 'react';
import "./Home.scss";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import Subfooter from '../../Common/Subfooter/Subfooter';


const Home = () => {
	return (
		<>
		<div className='frame'>
			<div className='header_wraper'>
				<Header />
			</div>
			<div className='main_body'></div>
			<Footer />
			<Subfooter />
			</div>
		</>
	)
}

export default Home

