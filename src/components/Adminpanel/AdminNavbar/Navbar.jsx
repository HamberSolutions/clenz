import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { FaClipboardCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "./AdminNavbar.css";

const Navbar = () => {
  const navList = [
    {
      icon: BiHomeSmile,
      text: "Dashboard",
      route: "/admin-profile",
    },
    {
      icon: FaClipboardCheck,
      text: "New Orders",
      route: "/orders",
    },
    {
      icon: FaClipboardList,
      text: "All Orders",
      route: "/orders-list",
    },
   
  ];

  return (
    <div>
      <div className="mobile-navbar">
        <MobileNavbar navList={navList} />
      </div>
      <div className="desktop-navbar">
        <DesktopNavbar navList={navList} />
      </div>
    </div>
  );
};

export default Navbar;
