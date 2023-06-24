import React, { useState, useEffect } from "react";
import { Container, Row, Col} from 'react-bootstrap'
import "./Signup.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../../../features/auth/authSlice";
import Spinner from "../../Common/Spinner/Spinner";
import { Link } from "react-router-dom";
import google_logo from "../../../assets/images/google.png";
import facebook_logo from "../../../assets/images/facebook.png";
import logo from "../../../assets/images/Logo1.png";


const Signup = () => {

  const [formData, setFormData] = useState({ username: "", email: "", password: "", });
  console.log(formData);
  const { username, email, password, } = formData;
  const [eye, setEye] = useState();

  const location = useLocation(); // Use useLocation to access location object
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";
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

    const userData = {
      username,
      email,
      password,
    };
    console.log("userData", userData);

    await dispatch(register(userData)).unwrap();
    navigate(from, { replace: true });
  };

  if (isLoading) {
    return <Spinner />
  }

  return (
	<>
    <form onSubmit={handleSubmit}>
      <section>
        <Container fluid className='main_wrapper_signup'>
          <Row>
            <Col lg={6} md={6} sm={12} className='left_col'>
              <img width={300} src={logo} alt="logo"></img>
            </Col>
            <Col lg={6} md={6} sm={12} className='right_col'>
              <Row>
                <Col>
                  <div>
                    <h1 className='signup_text'>
                      Sign Up
                    </h1>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div className="field_div">
                  <label className='field_name'>User Name</label>
                  <input className='input_field'
                   required
                   type="text"
                   id="username"
                   name="username"
                   value={username}
                   onChange={onChange}
                   placeholder="User Name" />
                   </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div className="field_div">
                  <label className='field_name'>Enter Email </label>
                  <input className='input_field'  
                  required
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email Address"/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div className="field_div">
                  <label className='field_name'>Enter Password </label>
                  <input className='input_field' 
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
                <div className="field_div">
                  <label className='field_name'>Contact Number </label>
                  <input className='input_field' type='text' placeholder='Contact Number' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div className="field_div">
                  <label className='field_name'>Address </label>
                  <input className='input_field' type='text' placeholder='Address' />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                <div>
                    <button className="signup_btn" type="submit" >Sign Up</button>
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
  )
}

export default Signup