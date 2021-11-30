import React from 'react';
import {NavLink} from "react-router-dom";
import {Row, Col, Dropdown, Table, Card} from "react-bootstrap";

// imort images
import TopBoxesLoop from "./TopBoxesLoop";
import PaymentHistoryLoop from "../pages/PaymentHistoryLoop";
import NotificationLoop from "../pages/NotificationLoop";

// import imgaes
import user1 from "../../images/usericon1.svg";
import user2 from "../../images/usericon2.svg";
import user3 from "../../images/usericon3.svg";
import user4 from "../../images/usericon4.svg";
import arrowimg1 from "../../images/arrow1.svg";
import baricon from "../../images/baricon.svg";
import receipt1 from "../../images/receipt1icon.svg";
import receipt2 from "../../images/receipt2icon.svg";
import arrowicon from "../../images/u_angle-downicon.svg";

const Dashboard = () => {
    // TopBoxesLoopArray
    const TopBoxesLoopArray =[
        {
            key:"0",
            tophead:"Current Rent",
            userimg:user1,
            textcolor:"bluetext",
            title:"$2,000",
            paytext:"Pay Now",
            paytextcolor:"bluetext",
            arrowimg:arrowimg1,
        },
        {
            key:"1",
            tophead:"Payment Date",
            userimg:user2,
            textcolor:"greentext",
            title:"03 Nov 2021",
            noimg:"d-none",
            // paytext:"Pay Now",
            // paytextcolor:"greentext",
            // arrowimg:arrowimg1,
        },
        {
            key:"2",
            tophead:"Payment Due",
            userimg:user3,
            textcolor:"yellowtext",
            title:"$500",
            noimg:"d-none",
        },
        {
            key:"3",
            tophead:"Open Tickets",
            userimg:user4,
            textcolor:"purpletext",
            title:"02",
            paytext:"View Tickets",
            paytextcolor:"purpletext",
            arrowimg:arrowimg1,
        },
    ]
    // InvoiceLoopArray
    const PaymentHistoryLoopArray =[
        {
            key:"0",
            propertyname:"Sand and Sea House",
            floortext:"5th Floor, 5D",
            date:"02 Feb 2021",
            time:"at 5:12 PM",
            amount:"$15,000",
            badgetext:"Unpaid",
            badgecolor:"yellowtext lightyellowbg",
        },
        {
            key:"1",
            propertyname:"Sand and Sea House",
            floortext:"5th Floor, 5D",
            date:"02 Feb 2021",
            time:"at 5:12 PM",
            amount:"$15,000",
            badgetext:"Paid",
            badgecolor:"greentext lightgreenbg",
        },
    ]
    // NotificationLoopArray
    const NotificationLoopArray =[
        {
            key:"0",
            colorupdate:"lightbluebg",
            receipticon:receipt1,
            heading:"Payment Complete",
            paragraphtext:"Your payment $421 was successfu..",
        },
        {
            key:"1",
            colorupdate:"lightyellowbg",
            receipticon:receipt2,
            heading:"Payment Due",
            paragraphtext:"Your payment of this month is due.",
        },
        {
            key:"2",
            colorupdate:"lightbluebg",
            receipticon:receipt1,
            heading:"Payment Complete",
            paragraphtext:"Your payment $421 was successfu..",
        },
    ]
    return (
        <>
            <div className="d-md-flex d-block align-items-center">
                <div className="main_head mb-4">
                    <h4 className="mb-2">Good Morning, Nancy</h4>
                    <p className="m-0">Your this month rent date is : 03 Nov 2021</p>
                </div>
                <div className="ms-auto">
                    <p className="fontsize20 mb-1 paragraphtext">Friday</p>
                    <h4 className="fontsize14 fontweightbold">09 November 2021</h4>
                </div>
            </div>
            {/*  */}
            <Row className="mb-xl-5 mb-3">
                {TopBoxesLoopArray.map((val) =>{
                    return(
                        <TopBoxesLoop
                            key={val.key}
                            tophead={val.tophead}
                            userimg={val.userimg}
                            textcolor={val.textcolor}
                            title={val.title}
                            paytext={val.paytext}
                            paytextcolor={val.paytextcolor}
                            arrowimg={val.arrowimg}
                            noimg={val.noimg}
                        />
                    )
                })}
            </Row>
            {/*  */}
            <Row>
                <Col xl={7} className="mb-3 mb-xl-0">
                    <Card>
                        <Card.Header className="py-3 px-3"><h4 className="fontsize18 fontweightbolder">Payment History</h4></Card.Header>
                        <Card.Body>
                        <Table hover responsive className="data_table">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Date</th>
                                    <th>Total Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {PaymentHistoryLoopArray.map((val) =>{
                                    return(
                                        <PaymentHistoryLoop
                                            key={val.key}
                                            propertyname={val.propertyname}
                                            floortext={val.floortext}
                                            date={val.date}
                                            time={val.time}
                                            amount={val.amount}
                                            badgetext={val.badgetext}
                                            badgecolor={val.badgecolor}
                                        />
                                    )
                                })}
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} className="">
                    <Card>
                        <Card.Header className="py-3 px-3 d-flex align-items-center">
                            <h4 className="fontsize18 fontweightbolder">Recent Notifications</h4>
                            <Dropdown className="ms-auto">
                                <Dropdown.Toggle variant="" className="dropdown-togglee" id="dropdown-basic"><img className="img-fluid" src={baricon} alt="icon"/></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            {NotificationLoopArray.map((val) =>{
                                return(
                                    <NotificationLoop
                                        key={val.key}
                                        colorupdate={val.colorupdate}
                                        receipticon={val.receipticon}
                                        heading={val.heading}
                                        paragraphtext={val.paragraphtext}
                                    />
                                )
                            })}
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <NavLink to="" className="fontsize16 bluetext fontweightbold">View All <img className="img-fluid" src={arrowicon} alt="icon"/></NavLink>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard;
