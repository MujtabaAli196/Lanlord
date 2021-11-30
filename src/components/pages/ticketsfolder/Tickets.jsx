import React from 'react';
import { NavLink } from 'react-router-dom';
import {Modal,Button,Form, Row, Dropdown, Col, FormGroup} from "react-bootstrap";

// import component
import TicketsLoop from "./TicketsLoop"; 


// import images
import plusicon from "../../../images/plusicon.svg";
import uploadicon from "../../../images/uploadimgicon.svg";

const Tickets = () => {
    const [modalShowAddFllow, setModalShowAddFllow] = React.useState(false);
    // TicketsLoopArray
    const TicketsLoopArray =[
        {
            key:"0",
            ivcname:"Ticket #59242",
            badgebg:"redbg",
            badgetext:"Active",
            paragraph:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto....",
            tag1badgetext:"Home Improvement",
            tag1badgebg:"bluetext lightbluebg",
            tag2badgetext:"Issue",
            tag2badgebg:"yellowtext lightyellowbg",
        },
        {
            key:"1",
            ivcname:"Ticket #59242",
            badgebg:"greenbg",
            badgetext:"Resolved",
            paragraph:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto....",
            tag1badgetext:"Emergency",
            tag1badgebg:"redtext lightredbg",
            tag2badgetext:"Water",
            tag2badgebg:"yellowtext lightyellowbg",
        },
    ]
    return (
        <>
            <div className="d-md-flex d-block align-items-center">
                <div className="main_head mb-4"><h4>My Tickets <small className="fontsize20 ms-2 paragraphtext fontweightregular">(02)</small></h4></div>
                <div className="ms-auto d-flex align-items-center">
                    <Dropdown className="me-2">
                        <Dropdown.Toggle variant="" className="btn_white" id="dropdown-basic">Recent</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavLink to="#" onClick={() => setModalShowAddFllow(true)} className="btn btn_blue"><img className="img-fluid me-2" src={plusicon} alt="icon"/>Create New</NavLink>
                </div>
            </div>
            {/*  */}
            <Row className="align-items-center ticket_box">
                {TicketsLoopArray.map((val) =>{
                    return(
                        <TicketsLoop
                            key={val.key}
                            ivcname={val.ivcname}
                            badgebg={val.badgebg}
                            badgetext={val.badgetext}
                            paragraph={val.paragraph}
                            tag1badgetext={val.tag1badgetext}
                            tag1badgebg={val.tag1badgebg}
                            tag2badgetext={val.tag2badgetext}
                            tag2badgebg={val.tag2badgebg}
                        />
                    )
                })}
            </Row>
            {/*  */}
            <MyVerticallyCenteredModalAddFllow
                show={modalShowAddFllow}
                onHide={() => setModalShowAddFllow(false)}
            />
        </>
    )
}

export default Tickets;

// add fllow modal
function MyVerticallyCenteredModalAddFllow(props) {
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton className="d-flex align-items-center">
                <Modal.Title id="contained-modal-title-vcenter">New Ticket</Modal.Title>
            </Modal.Header>
            <Modal.Body className="">
                <FormGroup className="mb-4">
                    <Form.Label className="fontsize14">Select Topic</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Form.Label className="fontsize14">Tags</Form.Label>
                    <p>zcx</p>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Form.Label className="fontsize14">Write the issue</Form.Label>
                    <p>zcx</p>
                </FormGroup>
                <FormGroup className="mb-4">
                    <Form.Label className="fontsize14">Attachments</Form.Label>
                    <Row>
                        <Col xl={3} lg={6} className="mb-3 mb-xl-0">
                            <div className="dropzone-wrapper">
                                <div className="dropzone-desc m-0 top-0 w-100 d-flex align-items-center justify-content-center">
                                    <p className="m-0 me-2"><img className="img-fluid" src={uploadicon} alt="icon"/></p>
                                    <p className="m-0 fontsize14">Add Image..</p>
                                </div>
                                <input type="file" name="img_logo" className="dropzone"/>
                            </div>
                        </Col>
                        <Col xl={3} lg={6} className="mb-3 mb-xl-0">
                            <div className="dropzone-wrapper">
                                <div className="dropzone-desc m-0 top-0 w-100 d-flex align-items-center justify-content-center">
                                    <p className="m-0 me-2"><img className="img-fluid" src={uploadicon} alt="icon"/></p>
                                    <p className="m-0 fontsize14">Add Image..</p>
                                </div>
                                <input type="file" name="img_logo" className="dropzone"/>
                            </div>
                        </Col>
                        <Col xl={3} lg={6} className="mb-3 mb-xl-0">
                            <div className="dropzone-wrapper">
                                <div className="dropzone-desc m-0 top-0 w-100 d-flex align-items-center justify-content-center">
                                    <p className="m-0 me-2"><img className="img-fluid" src={uploadicon} alt="icon"/></p>
                                    <p className="m-0 fontsize14">Add Image..</p>
                                </div>
                                <input type="file" name="img_logo" className="dropzone"/>
                            </div>
                        </Col>
                        <Col xl={3} lg={6} className="mb-3 mb-xl-0">
                            <div className="dropzone-wrapper">
                                <div className="dropzone-desc m-0 top-0 w-100 d-flex align-items-center justify-content-center">
                                    <p className="m-0 me-2"><img className="img-fluid" src={uploadicon} alt="icon"/></p>
                                    <p className="m-0 fontsize14">Add Image..</p>
                                </div>
                                <input type="file" name="img_logo" className="dropzone"/>
                            </div>
                        </Col>
                    </Row>
                </FormGroup>
            </Modal.Body>
            <Modal.Footer className="">
                <Button variant="" className="btn_white px-4" onClick={props.onHide}>Close</Button>
                <Button variant="" className="btn_blue purplebg"> Create Ticket</Button>
            </Modal.Footer>
        </Modal>
    );
}