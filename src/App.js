
import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Dashboard from "./components/dashboard";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";
// import Welcomepage from "./components/pages/welcomepage/welcomepage";
// import Refillorders from "./components/pages/refillorders/refillorders";
// import Protected from "./ProtectedRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
              <Signin />
          }
        />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route
          exact
          path="/dashboard"
          element={
            <Protected heading="Dashboard">
              <Dashboard />
            </Protected>
          }
        /> */}
        {/* <Route
          exact
          path="/home"
          element={
            <Protected>
              <Welcomepage />
            </Protected>
          }
        /> */}
        {/* <Route
          exact
          path="/refillorders"
          element={
            <Protected>
              <Refillorders />
            </Protected>
          }
        /> */}
        {/* <Route path="*" element={<NomatchFound></NomatchFound>} /> */}
      </Routes>
      <ToastContainer />
    </>
  );
};

export default Router;