import React from 'react';
import {Badge, Dropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';


// o=import images
import file_download from "../../images/file_downloadicon.svg";
import trashicon from "../../images/trashicon.svg";
import baricon from "../../images/baricon.svg";

const PaymentHistoryLoop = (props) => {
    return (
        <>
            <tr>
                <td style={{width:"200px"}}>
                    <h4 className="fontsize14 fontweightbolder">{props.propertyname} </h4>
                    <p className="m-0 paragraphtext">{props.floortext}</p>
                </td>
                <td style={{width:"200px"}}>
                    <h4 className="fontsize14 fontweightbolder">{props.date}</h4>
                    <p className="m-0 paragraphtext">{props.time}</p>
                </td>
                <td style={{width:"200px"}}><p className="m-0 fontweightbolder">{props.amount}</p></td>
                <td style={{width:"200px"}}><Badge variant="" className={"fontsize14 " + props.badgecolor}>{props.badgetext}</Badge></td>
                <td style={{width:"200px"}} className="d-flex align-items-center justify-content-between">
                    <NavLink to={`${process.env.PUBLIC_URL}/`} className="btn p-1 iconfix"><img className="img-fluid" src={file_download} alt="icon"/></NavLink>
                    <NavLink to={`${process.env.PUBLIC_URL}/`} className="btn p-1 iconfix"><img className="img-fluid" src={trashicon} alt="icon"/></NavLink>
                    <Dropdown>
                        <Dropdown.Toggle variant="" className="dropdown-togglee" id="dropdown-basic"><img className="img-fluid" src={baricon} alt="icon"/></Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        </>
    )
}

export default PaymentHistoryLoop;
