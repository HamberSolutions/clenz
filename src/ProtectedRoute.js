import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./components/dashboard";
function Protected(props) {
 const token = localStorage.getItem("loginToken");
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <DashboardLayout {...props}></DashboardLayout>;
}
export default Protected;