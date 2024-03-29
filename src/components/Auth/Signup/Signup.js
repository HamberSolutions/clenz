import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Signup.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { register, reset } from "../../../features/auth/authSlice";
import Spinner from "../../Common/Spinner/Spinner";
import { Link } from "react-router-dom";
import google_logo from "../../../assets/images/google.png";
import facebook_logo from "../../../assets/images/facebook.png";
import logo from "../../../assets/images/Logo1.png";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GrLinkPrevious } from 'react-icons/gr';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const { username, email, phone, address, password } = formData;
  const [eye, setEye] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      phone,
      address,
      password,
    };

    await dispatch(register(userData)).unwrap();
    navigate(from, { replace: true });
  };

  if (isLoading) {
    return <Spinner />;
  }

  const responseFacebook = (response) => {
    console.log("Facebook login response:", response);
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Process the response data as per your requirement
  };

  const responseGoogleFailure = (response) => {
    console.error(response);
  };
  // const responseGoogle = (response) => {
  //   console.log(response);
  //   // Handle the response from Google Sign-In
  //   // Check if it's a sign-up or sign-in flow
  //   if (response.profileObj) {
  //     // Sign-Up: New user
  //     const { email, name, imageUrl } = response.profileObj;
  //     // Perform sign-up logic here
  //     // e.g., send user details to your server for registration

  //   } else {
  //     // Sign-In: Existing user
  //     const { email } = response;
  //     // Perform sign-in logic here
  //     // e.g., send user email to your server for authentication

  //   }
  // };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <Container fluid className="main_wrapper_signup">
            <Row>
              <Col lg={6} md={6} sm={12} className="left_col">
                <Row>
                  <Col>
                    <div className="back_div">
                      <Link to="/" ><div className="back_button">
                        <GrLinkPrevious className="back_icon" />
                      </div></Link>
                      <div className="back_div_des">Back to home</div>
                    </div>
                  </Col>
                </Row>
                <img  src={logo} alt="logo" className="logo_image"></img>
              </Col>
              <Col lg={6} md={6} sm={12} className="right_col">
                <Row>
                  <Col>
                    <div>
                      <h1 className="signup_text">Sign Up</h1>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="field_div">
                      <label className="field_name">User Name</label>
                      <input
                        className="input_field"
                        required
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        placeholder="User Name"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="field_div">
                      <label className="field_name">Enter Email</label>
                      <input
                        className="input_field"
                        required
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email Address"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="field_div">
                      <label className="field_name">Contact Number</label>
                      <input
                        className="input_field"
                        required
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={onChange}
                        placeholder="Contact Number"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="field_div">
                      <label className="field_name">Address</label>
                      <input
                        className="input_field"
                        required
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={onChange}
                        placeholder="Address"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="field_div">
                      <label className="field_name">Enter Password</label>
                      <input
                        className="input_field"
                        required
                        type={eye ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Password"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div>
                      <button className="signup_btn" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="description">
                      <div className="login_text">Already have an account? </div>
                      <div className="login_link"><Link className="login_link" to="/login"><div>Signin</div></Link></div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <div style={{color:"aliceblue"}}>Signup with</div>
                    <div className="social_buttons">
                      <GoogleLogin
                        clientId="406823839473-fd86b6eb1uprqniumgrqkja26347ark8.apps.googleusercontent.com"
                        // buttonText="Login with Google"
                        render={renderProps => (
                          <button className="google_button" onClick={renderProps.onClick} ><div className="google_logo">
                            <img src={google_logo} alt="google_logo" />
                          </div>
                            {/* <div className="google_des">
                              continue with google
                            </div> */}
                          </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleFailure}
                        cookiePolicy={'single_host_origin'}
                      />
                      <FacebookLogin
                        appId="3106972836263485"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                        render={renderProps => (
                          <button className="facebook_button" onClick={renderProps.onClick}>
                            <div className="facebook_logo">
                              <img src={facebook_logo} alt="facebook_logo" />
                            </div>
                            {/* <div className="facebook_des">
                              continue with Facebook
                            </div> */}
                          </button>
                        )}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </form>
    </>
  );
};

export default Signup;
