import React from 'react';
import {Col, Card, Button, Badge} from "react-bootstrap";

const TicketsLoop = (props) => {
    return (
        <>
            <Col xl={3} lg={6}>
                <Card className="">
                    <Card.Header className="d-md-flex d-block align-items-center">
                        <h4 className="name mb-3 mb-xl-0">{props.ivcname}</h4>
                        <Badge variant="" className={"ms-auto " + props.badgebg}>{props.badgetext}</Badge>
                    </Card.Header>
                    <Card.Body>
                        <small className="mb-3 d-block">Detail:</small>
                        <p className="paragraphtext fontsize14 m-0">{props.paragraph}</p>
                    </Card.Body>
                    <Card.Footer>
                        <small className="mb-3 d-block">Tags:</small>
                        <Badge variant="" className={"me-2 " + props.tag1badgebg}>{props.tag1badgetext}</Badge>
                        <Badge variant="" className={" " + props.tag2badgebg}>{props.tag2badgetext}</Badge>
                        <Button type="button" className="btn w-100 mt-4 btn_detail">Close This Issue</Button>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}

export default TicketsLoop;
