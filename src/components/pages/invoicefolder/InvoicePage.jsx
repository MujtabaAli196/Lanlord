import React from 'react';
import {Card, Col, Form, Button, InputGroup, FormLabel, Row, NavItem} from "react-bootstrap";


// images import
import mc_symbolicon from "../../../images/mc_symbolicon.svg";


const InvoicePage = () => {
    return (
        <>
            <Card className="mb-4">
                <Card.Header className="bodybg py-4">
                    <p className="mb-2 fontweightbold blacktext"><small className="paragraphtext">Invoice</small> / INV-0012</p>
                    <h5 className="fontsize22 fontweightbold">INV-0012</h5>
                </Card.Header>
            </Card>
            {/*  */}
            <Row className="invoicepage">
                <Col xl={6} lg={12}>
                    <Card>
                        <Card.Body>
                            <h4 className="fontsize16 fontweightbold blacktext mb-3">Personal Information</h4>
                            <NavItem className="d-xl-flex d-block align-items-center justify-content-between py-2 px-3">
                                <p className="m-0 paragraphtext fontsize14">Name</p>
                                <strong className="fontsize14"> Nancy Parker</strong>
                            </NavItem>
                            <NavItem className="d-xl-flex d-block align-items-center justify-content-between py-2 px-3">
                                <p className="m-0 paragraphtext fontsize14">Mobile Number</p>
                                <strong className="fontsize14"> (847) 785-2310</strong>
                            </NavItem>
                            <NavItem className="d-xl-flex d-block align-items-center justify-content-between py-2 px-3">
                                <p className="m-0 paragraphtext fontsize14">Email</p>
                                <strong className="fontsize14"> nancy.prk@email.com</strong>
                            </NavItem>
                            <NavItem className="d-xl-flex d-block align-items-center justify-content-between py-2 px-3">
                                <p className="m-0 paragraphtext fontsize14">Referance</p>
                                <strong className="fontsize14"> November 2021</strong>
                            </NavItem>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} lg={12}>
                    <Card.Body>
                        <Form>
                            <h5 className="fontsize18 fontweightbolder">Select Payment Method</h5>
                            <div className="py-3 px-0 mb-3">
                                <div className="d-flex align-items-center mb-3">
                                    <Form.Check type="radio" aria-label="radio 1" />
                                    <FormLabel className="m-0 fontweightbold ms-3">Credit Card/Debit Card</FormLabel>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <Form.Check type="radio" aria-label="radio 1" />
                                    <FormLabel className="m-0 fontweightbold ms-3">Paypal</FormLabel>
                                </div>
                                <div className="d-flex align-items-center">
                                    <Form.Check type="radio" aria-label="radio 1" />
                                    <FormLabel className="m-0 fontweightbold ms-3">Stripe</FormLabel>
                                </div>
                            </div>
                            <h5 className="fontsize18 fontweightbolder mb-3">Add Card Details</h5>
                            <Form.Group className="mb-4">
                                <FormLabel className="fontsize14">Card Number</FormLabel>
                                <InputGroup className="mb-0">
                                    <Form.Control type="number" name="" placeholder="****  ****  ****5190" aria-label="" id="" />
                                    <InputGroup.Text id="basic-addon1"><img className="img-fluid" src={mc_symbolicon} alt="icon"/></InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="text" name="" placeholder="Card Holder Name" aria-label="" id="" />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <InputGroup className="mb-0">
                                    <Form.Control type="text" name="" placeholder="MM" aria-label="" id="" />
                                    <Form.Control type="text" name="" placeholder="YY" aria-label="" id="" />
                                    <Form.Control type="text" name="" placeholder="CVV" aria-label="" id="" />
                                </InputGroup>
                            </Form.Group>
                            <p className="m-0 d-flex align-items-center">
                                <Form.Check aria-label="option 1" />
                                <FormLabel className="m-0 fontsize14 ms-2 paragraphtext">Save this card for future payment</FormLabel>
                            </p>
                            <Button type="button" className="btn w-100 bluebg py-3 mt-4">Pay Now</Button>
                            <Button type="button" className="btn w-100 btn_detail py-3 mt-4">Pay Now</Button>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
        </>
    )
}

export default InvoicePage;
