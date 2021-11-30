import React from 'react';
import { NavLink } from "react-router-dom";
import { Form,Row,Button, Col, FormLabel } from "react-bootstrap";

// import images
import uploadicon from "../images/uploadicon.svg";

const UploadForm = () => {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form">
                            <Form className="validate-form w-100" action="">
                                <span className="login100-form-title pb-3">Upload Application</span>
                                <p className="paragraphtext fontsize14">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor</p>
                                <Row className="align-items-center">
                                    <Col xl={12} className="mb-0">
                                        <div className="contact100-form-checkbox">
                                            <Form.Group className="mb-0 d-flex align-items-center">
                                                <Form.Check/>
                                                <FormLabel className="m-0 ms-3">By clicking Create account, I agree that I have read and accepted the <NavLink className="text-decoration-none purpletext fontweightmeduim" to={`${process.env.PUBLIC_URL}/termsofuse`}> Terms of Use </NavLink> and <NavLink className="text-decoration-none purpletext fontweightmeduim" to={`${process.env.PUBLIC_URL}/privacypolicy`}> Privacy Policy. </NavLink></FormLabel>
                                            </Form.Group>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="my-4">
                                    <Form.Group>
                                        <div className="dropzone-wrapper">
                                            <div className="dropzone-desc">
                                                <p>Drag and Drop the file or</p>
                                                <Button type="submit" variant="" className="login100-form-btn"><img className="img-fluid me-2" src={uploadicon} alt="icon"/> Upload</Button>
                                            </div>
                                            <input type="file" name="img_logo" className="dropzone"/>
                                        </div>
                                    </Form.Group>
                                    </Col>
                                    <Col xl={12} className="">
                                        <Button variant="" type="submit" id="submit" className="login100-form-btn">Submit Document</Button>
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

export default UploadForm;
