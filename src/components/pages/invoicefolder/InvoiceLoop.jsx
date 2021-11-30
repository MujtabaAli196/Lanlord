import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown} from "react-bootstrap";

// img import
import baricon from "../../../images/baricon.svg";

const InvoiceLoop = (props) => {
    return (
        <>
            <tr>
                <td style={{width:"200px"}}>{props.invoice_no}</td>
                <td style={{width:"200px"}}>{props.prefrence}</td>
                <td style={{width:"200px"}}>{props.date}</td>
                <td style={{width:"200px"}}>{props.duedate}</td>
                <td style={{width:"200px"}}>{props.amount}</td>
                <td style={{width:"200px"}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <NavLink to={`${process.env.PUBLIC_URL}/invoicepage`} className={"btn text-white fontsize14 " + props.btnbg}>{props.btntext} <img className="img-fluid ms-2" src={props.imgarrow} alt={props.alticon}/></NavLink>
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown-togglee" variant="" id="dropdown-basic"><img className="img-fluid" src={baricon} alt="icon"/></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default InvoiceLoop;
