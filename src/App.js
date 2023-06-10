import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/* Public Routes*/
// import Home from "./Pages/Home/Home";
// import { About } from "./Pages/Aboutus/About";
// import { Services } from "./Pages/Services/Services";
// import { Contactus } from "./Pages/Contactus/Contactus";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";

/* Admin Routes*/
import{ Adminprofile } from "./pages/Adminportal/Adminprofile";
 
/* User Side Routes*/  
// import Userprofile from "./Pages/Userportal/Userprofile";

/*Routes Navigations*/ 
import Layout from "./Routes/Layout";
import RequireAuth from "./Routes/RequireAuth";
import Unauthorized from "./Routes/Unauthorized";
import Missing from "./Routes/Missing";

const ROLES = {
  'Admin': 5150,
  'User': 2001,
}

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactus" element={<Contactus/>} />     */}

        <Route path="/admin-profile" element={<Adminprofile />} />
        {/* <Route path="/user-profile" element={<Userprofile />} /> */}
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        {/* <Route path="/admin-profile" element={<Adminprofile />} /> */}
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        {/* <Route path="/user-profile" element={<Userprofile />} /> */}
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;