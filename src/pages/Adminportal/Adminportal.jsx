import React from 'react'
import  Dashboard  from '../../components/Adminpanel/Dashboard/Dashboard';
import { Grid } from "@mui/material";
import AdminNavbar from '../../components/Adminpanel/AdminNavbar/Navbar';
import "../../components/Adminpanel/AdminNavbar/AdminNavbar.css";
import "./Adminportal.scss";

export const Adminprofile = () => {
  return (
    <>
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
                    <Dashboard />
                  </Grid>
                </Grid>
    </div>
    </>
  )
}
