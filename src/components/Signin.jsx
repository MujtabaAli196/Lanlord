import React from 'react';
import { NavLink } from "react-router-dom";
import { Form,Col,Button,FormLabel } from "react-bootstrap";

// 
// import logo_black from "";
import eye from "../images/eye.svg";

const Signin = () => {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form">
                            <Form className="validate-form w-100" action="">
                                <span className="login100-form-title pb-3">Sign In</span>
                                <Col xl={12} className="mb-3">
                                    <Form.Group>
                                        {/* <FormLabel htmlFor="email" className="mb-2">Your Email Address</FormLabel> */}
                                        <div className="wrap-input100 validate-input" data-validate="Email Address">
                                            <input className="input100" placeholder="Email Address" type="text" autoComplete="off" id="email" name="email" />
                                            <span className="focus-input100"></span>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col xl={12} className="mb-3">
                                    <Form.Group>
                                        {/* <FormLabel htmlFor="password" className="mb-2">Password</FormLabel> */}
                                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                                            <input className="input100" type="password" id="password" placeholder="Password" name="password" />
                                            <span className="focus-input100"></span>
                                            <span className="focus-input100-img"><img className="img-fluid" src={eye} alt="eye" /></span>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="contact100-form-checkbox">
                                        <Form.Group className="mb-0 d-flex align-items-center">
                                            <Form.Check/>
                                            <FormLabel className="m-0 ms-3">Stay Log In</FormLabel>
                                        </Form.Group>
                                    </div>
                                    <p className="ms-auto"><NavLink to={`${process.env.PUBLIC_URL}/forgot`} className="txt1">Forgot password?</NavLink></p>
                                </div>
                                <Button variant="" type="submit" id="submit" className="login100-form-btn">Sign In</Button>
                                <p className="mt-4">Don't have an account?<NavLink to={`${process.env.PUBLIC_URL}/signup`} className="txt1"> Sign Up</NavLink></p>
                            </Form>
                        </div>
                        <div className="login100-more">
                            <div className="tecmyer-logo text-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;
