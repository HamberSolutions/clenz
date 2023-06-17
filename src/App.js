import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/* Public Routes*/
import Home from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Servicespage  from "./pages/Servicespage/Servicespage";
import Contactpage from "./pages/Contactpage/Contactpage";
import Booknow from "./pages/Bookpage/Book";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";

/* Admin Routes*/
// import{ Adminprofile } from "./pages/Adminportal/Adminportal";
 
/* User Side Routes*/  
// import Userprofile from "./Pages/Userportal/Userprofile";

/*Routes Navigations*/ 
import Layout from "./Routes/Layout";
import RequireAuth from "./Routes/RequireAuth";
import Unauthorized from "./Routes/Unauthorized";
import Missing from "./Routes/Missing";
import Order from "./pages/Adminportal/Order";
import Adminprofile from "./pages/Adminportal/Adminprofile";

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
        <Route path="/services" element={<Servicespage/>} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path="/contactus" element={<Contactpage/>} />    
        <Route path="/book-now" element={<Booknow/>} />
        <Route path="/new-orders" element={<Order/>} />
        <Route path="/admin-profile" element={<Adminprofile/>} />

        {/* <Route path="/admin-profile" element={<Adminprofile />} /> */}
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