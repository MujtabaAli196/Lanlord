import React from 'react';
import { Card, Dropdown, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// import images
import baricon from "../../../images/baricon.svg";
import phoneicon from "../../../images/phoneicon.svg";
import videoicon from "../../../images/videoicon.svg";
import peopleicon from "../../../images/peopleicon.svg";
import usericon from "../../../images/usericon.svg";
import keyboard_arrow_down from "../../../images/keyboard_arrow_down.svg";

const Chat = () => {
    return (
        <>
            <div className="main_head mb-4">
                <h4 className="mb-2">Direct Chat</h4>
            </div>
            {/*  */}
            <Card className="chat_tabs">
                <Row>
                    <Col xl={4} lg={6}>
                        <Tabs>
                            <Card.Header className="py-3">
                                <TabList>
                                    <Tab><img className="img-fluid me-2" src={usericon} alt="icon"/> Landlord</Tab>
                                    <Tab><img className="img-fluid me-2" src={peopleicon} alt="icon"/> Maintainer</Tab>
                                </TabList>
                            </Card.Header>
                            <Card.Body>
                                <TabPanel>
                                    <Tabs className="innertabs">
                                        <TabList className="d-flex align-items-center">
                                            <div className="me-auto">
                                                <Tab> All</Tab>
                                                <Tab> Unread</Tab>
                                                <Tab> Unresolved</Tab>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" className="px-1 dropdown-togglee" id="dropdown-basic">Filter <img className="img-fluid" src={keyboard_arrow_down} alt="icon"/></Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </TabList>
                                        {/*  */}
                                        <TabPanel>All</TabPanel>
                                        <TabPanel>Unread</TabPanel>
                                        <TabPanel>Unresolved</TabPanel>
                                    </Tabs>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Maintainer</h2>
                                </TabPanel>
                            </Card.Body>
                        </Tabs>
                    </Col>
                    <Col xl={8} lg={6}>
                        <Card.Header className="py-3 d-xl-flex d-block align-items-center px-2 py-0">
                            <h4 className="fontsize18 fontweightbold">Quinten Kortum</h4>
                            <div className="ms-auto d-flex align-items-center">
                                <NavLink className="btn px-1" to="#"><img className="img-fluid" src={phoneicon} alt="icon"/></NavLink>
                                <NavLink className="btn px-1" to="#"><img className="img-fluid" src={videoicon} alt="icon"/></NavLink>
                                <Dropdown class="">
                                    <Dropdown.Toggle variant="" className="px-1 dropdown-togglee" id="dropdown-basic"><img className="img-fluid" src={baricon} alt="icon"/></Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>zczc</Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default Chat;
