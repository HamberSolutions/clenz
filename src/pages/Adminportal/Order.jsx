import React from 'react'
import "./Adminportal.scss";
import Neworder from '../../components/Adminpanel/Admincomp/Neworder'
import { Grid } from "@mui/material";
import AdminNavbar from '../../components/Adminpanel/AdminNavbar/Navbar';
import "../../components/Adminpanel/AdminNavbar/AdminNavbar.css";
import "../../components/Adminpanel/Dashboard/Admindashboard.css";

const Order = () => {
	return (
		<div className='main-wrapper'>
			<Grid container>
				<Grid item xs={12} sm={12} md={3} lg={2.7}>
					<AdminNavbar />
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={9}
					lg={9.3}
					className="right-panel-wrapper"
				>
					<Neworder />
				</Grid>
			</Grid>
		</div>
	)
}

export default Order