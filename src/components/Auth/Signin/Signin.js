import React, { useState, useEffect } from "react";
import "./Signin.scss";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import useAuth from "../../../hooks/useAuth";
import authService from "../../../features/auth/authService";
import Spinner from "../../Common/Spinner/Spinner";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import google_logo from "../../../assets/images/google.png";
import facebook_logo from "../../../assets/images/facebook.png";
import logo from "../../../assets/images/Logo1.png";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


const Signin = () => {

  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [eye, setEye] = useState();
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [roles, setRoles] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const { setAuth } = useAuth();
  console.log()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    console.log(e.target.name);
    setFormData((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    const roleroute = {
      admin:'/admin-profile',
      user: '/services',
    };
    
    authService.login(loginData).then((response) => {
      console.log("responselogin", response)
      const username = response?.data?.username;
      console.log("username",username);
      localStorage.setItem('username', username);
      // setUsername(username);
      const userId = response?.data?._id;
      console.log("userId",userId);
      localStorage.setItem('userId', userId);
      
      const password = response?.data?.password;
      console.log("password",password);
      localStorage.setItem('password', password);
      // setPwd(pwd);
      const roles = response?.data?.role;
      console.log("roles",roles);
      localStorage.setItem('roles', roles);
      // setRoles(roles);
      const accessToken = response?.token;
      console.log("accessToken",accessToken);
      localStorage.setItem('accessToken', accessToken);
      // setAccessToken(accessToken);
      setAuth({ username, password, roles, accessToken });
      navigate(roleroute[roles], { replace: true });
      console.log("rolesafter",roles);
    });

    await dispatch(login(loginData)).unwrap();
  }

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
  
  // const handleGoogleResponse = (response) => { 
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
        <Container fluid className="main_wrapper_signin">
          <Row>
            <Col lg={6} md={6} sm={12} className="left_col">
            <img width={300} src={logo} alt="logo"></img>
            </Col>
            <Col lg={6} md={6} sm={12} className="right_col">
              <Row>
                <Col>
                  <div>
                    <h1 className="signin_text"> Sign In </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="field_div">
                    <label className="field_name">Enter Email</label>
                    <input className="input_field"
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email Address" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="field_div">
                    <label className="field_name">Enter Password</label>
                    <input className="input_field"
                    required
                    type={eye ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <button className="signin_btn" type="submit" >Sign In</button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div className="social_buttons">
                    <GoogleLogin
                      clientId="406823839473-kd89q4143os1nnebh737tfl5nir43bgf.apps.googleusercontent.com"
                      buttonText="Login with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogleFailure}
                      cookiePolicy={'single_host_origin'}
                      render={renderProps => (
                        <button className="google_button" onClick={renderProps.onClick} ><div className="google_logo">
                          <img src={google_logo} alt="google_logo" />
                        </div>
                          <div className="google_des">
                            continue with google
                          </div>
                          </button>
                      )}
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
                            <div className="facebook_des">
                              continue with Facebook
                            </div>
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

export default Signin;
