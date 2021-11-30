import React from 'react';
import { NavLink } from "react-router-dom";
import { Form,Row,Button, Col, FormLabel } from "react-bootstrap";

// 
import eye from "../images/eye.svg";
import downloadicon from "../images/fi_downloadicon.svg";

const Signup = () => {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form">
                            <Form className="validate-form w-100" action="">
                                <span className="login100-form-title pb-3">Getting Started</span>
                                <p className="paragraphtext fontsize14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor or <NavLink to={`${process.env.PUBLIC_URL}/uploadform`} className="text-decoration-none purpletext fontweightmeduim">Upload Rental Application Form</NavLink></p>
                                <Row className="align-items-center">
                                    <Col xl={6} className="mb-3">
                                        <Form.Group>
                                            {/* <FormLabel htmlFor="username" className="mb-2">Name</FormLabel> */}
                                            <div className="wrap-input100 validate-input" data-validate="Name">
                                                <input className="input100" placeholder="Name" type="text" autoComplete="off" id="username" name="name" />
                                                <span className="focus-input100"></span>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={6} className="mb-3">
                                        <Form.Group>
                                            {/* <FormLabel htmlFor="username" className="mb-2">Name</FormLabel> */}
                                            <div className="wrap-input100 validate-input" data-validate="Name">
                                                <input className="input100" placeholder="Last Name" type="text" autoComplete="off" id="username" name="name" />
                                                <span className="focus-input100"></span>
                                            </div>
                                        </Form.Group>
                                    </Col>
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
                                            {/* <FormLabel htmlFor="email" className="mb-2">Your Email Address</FormLabel> */}
                                            <div className="wrap-input100 validate-input" data-validate="Phone Number">
                                                <input className="input100" placeholder="Phone Number" type="number" autoComplete="off" id="number" name="number" />
                                                <span className="focus-input100"></span>
                                            </div>
                                            <small className="paragraphtext">Standard call, messaging or data rates may apply.</small>
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
                                    <Col xl={12} className="mb-3">
                                        <Form.Group>
                                            {/* <FormLabel htmlFor="confirmpassword" className="mb-2">Confirm Password</FormLabel> */}
                                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                                <input className="input100" type="password" id="confirmpassword" placeholder="Confirm Password" name="password" />
                                                <span className="focus-input100"></span>
                                                <span className="focus-input100-img"><img className="img-fluid" src={eye} alt="eye" /></span>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col xl={12} className="mb-3">
                                        <div className="contact100-form-checkbox">
                                            <Form.Group className="mb-0 d-flex align-items-center">
                                                <Form.Check/>
                                                <FormLabel className="m-0 ms-3">By clicking Create account, I agree that I have read and accepted the <NavLink className="text-decoration-none purpletext fontweightmeduim" to={`${process.env.PUBLIC_URL}/termsofuse`}> Terms of Use </NavLink> and <NavLink className="text-decoration-none purpletext fontweightmeduim" to={`${process.env.PUBLIC_URL}/privacypolicy`}> Privacy Policy. </NavLink></FormLabel>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="">
                                        <Button variant="" type="submit" id="submit" className="login100-form-btn">Sign Up</Button>
                                    </Col>
                                    <Col xl={12} className="my-3 text-center fontsize14 paragraphtext">OR</Col>
                                    <Col xl={12} className="">
                                        <Button variant="" type="submit" id="submit" className="login100-form-btn blacktext whitebg"><img className="img-fluid me-2" src={downloadicon} alt="icon"/> Download Property Rental Application Form</Button>
                                    </Col>
                                </Row>
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

export default Signup;
