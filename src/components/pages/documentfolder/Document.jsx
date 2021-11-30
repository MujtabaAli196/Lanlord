import React from 'react';
import {Dropdown,Row,Col, Card} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

// import images
import thumbnailviewicon from "../../../images/thumbnailviewicon.svg";
import listviewicon from "../../../images/listviewicon.svg";
import pdficon from "../../../images/pdficon.svg";
import foldericon from "../../../images/foldericon.svg";
import fileicon from "../../../images/fileicon.svg";

const Document = () => {
    return (
        <>
            <div className="d-md-flex d-block align-items-center">
                <div className="main_head mb-4"><h4>Documents</h4></div>
                <div className="ms-auto d-flex align-items-center">
                    <NavLink to={`${process.env.PUBLIC_URL}/document`} className="btn btn_white border_paragraph_1 border_radius_5"><img className="img-fluid" src={listviewicon} alt="icon"/></NavLink>
                    <NavLink to={`${process.env.PUBLIC_URL}/document`} className="btn btn_white border_paragraph_1 border_radius_5"><img className="img-fluid" src={thumbnailviewicon} alt="icon"/></NavLink>
                    <Dropdown className="ms-2">
                        <Dropdown.Toggle variant="" className="btn_white border_radius_5 border_paragraph_1" id="dropdown-basic">Group by: <strong>Date added</strong></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            {/*  */}
            <h4 className="mb-3 fontsize16 fontweightbold">Home Docuements</h4>
            <Row className="mb-5">
                <Col xl={2} lg={3} md={6} className="mb-3 mb-lg-0">
                    <div className="border_paragraph_1 border_radius_10 text-center whitebg">
                        <Card.Body className="pt-0">
                            <div className="py-4"><img className="img-fluid" src={pdficon} alt="icon"/></div>
                            <h5 className="fontsize14 fontweightbold blacktext">No name presentati…</h5>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={2} lg={3} md={6} className="mb-3 mb-lg-0">
                    <div className="border_paragraph_1 border_radius_10 text-center whitebg">
                        <Card.Body className="pt-0">
                            <div className="py-4"><img className="img-fluid" src={pdficon} alt="icon"/></div>
                            <h5 className="fontsize14 fontweightbold blacktext">No name presentati…</h5>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={2} lg={3} md={6} className="mb-3 mb-lg-0">
                    <div className="border_paragraph_1 border_radius_10 text-center whitebg">
                        <Card.Body className="pt-0">
                            <div className="py-4"><img className="img-fluid" src={pdficon} alt="icon"/></div>
                            <h5 className="fontsize14 fontweightbold blacktext">No name presentati…</h5>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={2} lg={3} md={6} className="mb-3 mb-lg-0">
                    <div className="border_paragraph_1 border_radius_10 text-center whitebg">
                        <Card.Body className="pt-0">
                            <div className="py-4"><img className="img-fluid" src={fileicon} alt="icon"/></div>
                            <h5 className="fontsize14 fontweightbold blacktext">New Rent Document</h5>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
            {/*  */}
            <h4 className="mb-3 fontsize16 fontweightbold">House Rules</h4>
            <Row>
                <Col xl={2} lg={3} md={6} className="mb-3 mb-lg-0">
                    <div className="border_paragraph_1 border_radius_10 text-start whitebg">
                        <Card.Body className="pt-0">
                            <div className="py-4 text-center"><img className="img-fluid" src={foldericon} alt="icon"/></div>
                            <h5 className="fontsize14 fontweightbold blacktext">Manager</h5>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={2} lg={3} md={6} className="mb-3 mb-lg-0">
                    <div className="border_paragraph_1 border_radius_10 text-start whitebg">
                        <Card.Body className="pt-0">
                            <div className="py-4 text-center"><img className="img-fluid" src={foldericon} alt="icon"/></div>
                            <h5 className="fontsize14 fontweightbold blacktext">New Home</h5>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={2} lg={3} md={6} className="mb-3 mb-lg-0">
                    <div className="border_paragraph_1 border_radius_10 text-start whitebg">
                        <Card.Body className="pt-0">
                            <div className="py-4 text-center"><img className="img-fluid" src={fileicon} alt="icon"/></div>
                            <h5 className="fontsize14 fontweightbold blacktext">Oricon design brief…</h5>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Document;
