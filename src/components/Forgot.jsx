import React from 'react';
import { NavLink } from "react-router-dom";
import { Form, Col,Button } from "react-bootstrap";

// 

const Forgot = () => {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form">
                            <Form className="validate-form w-100" action="">
                                <span className="login100-form-title">Recover Password</span>
                                <p className="pb-4 paragraphtext fontsize14">Enter your Email and instructions will be sent to you!</p>
                                <Col xl={12} className="mb-3">
                                    <Form.Group>
                                        {/* <FormLabel htmlFor="email" className="mb-2">Your Email Address</FormLabel> */}
                                        <div className="wrap-input100 validate-input" data-validate="Email Address">
                                            <input className="input100" placeholder="Email Address" type="text" autoComplete="off" id="email" name="email" />
                                            <span className="focus-input100"></span>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <div className="d-flex align-items-center mb-4">
                                    <p className="m-0">Don't have an account?<NavLink to={`${process.env.PUBLIC_URL}/signin`} className="txt1"> Sign In</NavLink></p>
                                    {/* <p className="m-0 ml-auto"><NavLink to="/forgot" className="txt1">Forgot password?</NavLink></p> */}
                                </div>
                                <Button variant="" type="submit" id="submit" className="login100-form-btn">Recovery</Button>
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

export default Forgot;
