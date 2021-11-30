import React from 'react';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Navbar, FormControl, Button, Dropdown, InputGroup, NavItem, Nav } from "react-bootstrap";

// import componnet

// import images
import search from "../images/searchicon.svg";
import notificationicon from "../images/notificationicon.svg";
import chat from "../images/chaticon.svg";
import avataricon from "../images/avatarpic.jpg";
import arrow_vector from "../images/arrow_vector.svg";

const Header = (props) => {
    if (props.location.pathname === `${process.env.PUBLIC_URL}/signin` || props.location.pathname === `${process.env.PUBLIC_URL}/uploadform` || props.location.pathname === `${process.env.PUBLIC_URL}/signup` || props.location.pathname === `${process.env.PUBLIC_URL}/forgot`) {
        return false;
    }
    return (
        <>
            <div className="header align-items-center d-flex px-0 px-xl-3 pe-3">
                <Navbar className="w-100 d-xl-flex d-block py-0 py-xl-3">
                    <div className="me-auto mb-xl-0 mb-4">
                        <NavItem className="px-0 d-flex alighn-items-center">
                            <Button variant="" type="button" id="sidebarCollapse" className="humer p-2 d-block d-xl-none"><img className="img-fluid " src={arrow_vector} alt="toggle_button" /></Button>
                            <InputGroup className="mb-0 mt-0 mt-lg-0 ms-5 ms-xl-0">
                                <InputGroup.Text id="basic-addon1"><img width="30" className="img-fluid" src={search} alt="icon" /></InputGroup.Text>
                                <FormControl type="text" className="" name="" placeholder="Search for people, properties, invoice... " aria-label="" />
                            </InputGroup>
                        </NavItem>
                    </div>
                    <div className="d-flex ms-5 ms-xl-0">
                        <Nav className="justify-content-between align-items-center  w-100">
                            <NavItem>
                                <NavLink to={`${process.env.PUBLIC_URL}/dashboard`} className="notfication"><span className="alertcircle">0</span><img className="img-fluid icons" src={notificationicon} alt="icon" /></NavLink>
                            </NavItem>
                            <NavItem className="ps-xl-4">
                                <NavLink to={`${process.env.PUBLIC_URL}/chat`} className="notfication">
                                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"><span className="visually-hidden">New alerts</span></span><img className="img-fluid icons" src={chat} alt="icon" />
                                </NavLink>
                            </NavItem>
                            <Dropdown className="d-inline notfication ms-xl-4" autoClose="outside">
                                <Dropdown.Toggle variant="" id="dropdown-autoclose-outside" className="w-100"><div className="avatar me-2"><img className="img-fluid icons" src={avataricon} alt="icon" /></div>Nancy</Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        </>
    )
}

export default withRouter(Header);
