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
                <div className="google_button">
                  <div className="google_logo">
                    <img src={google_logo} alt="google_logo" />
                  </div>
                  <div className="google_des">continue with google</div>
                </div>
                <div className="facebook_button">
                  <div className="facebook_logo">
                    <img src={facebook_logo} alt="facebook_logo" />
                  </div>
                  <div className="facebook_des">continue with facebook</div>
                </div>
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
