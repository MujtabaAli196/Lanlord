import React from 'react';
import {Card, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const TopBoxesLoop = (props) => {
    return (
        <>
            <Col xl={3} lg={4} md={6} className="mb-3 mb-xl-0">
                <Card className="h-100">
                    <Card.Body>
                        <p className={"fontweightbold fontsize14 " + props.textcolor}><span className="me-2"><img className="img-fluid" src={props.userimg} alt="icon"/></span> {props.tophead}</p>
                        <h4 className="fontweightbolder fontsize30 mb-2">{props.title}</h4>
                        <NavLink to={`${process.env.PUBLIC_URL}/`} className={"fontsize14 fontweightbolder text-decoration " + props.paytextcolor}>{props.paytext}</NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default TopBoxesLoop;
