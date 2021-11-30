import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem, Button } from 'react-bootstrap';
import { withRouter } from "react-router";

// import images
// import monogram from "../images/monogramicon.svg";
import logo from "../images/logo.svg";
import monogram from "../images/monogramicon.svg";
import side_dashboard from "../images/side_dashboardicon.svg";
// import side_contact from "../images/side_contacticon.svg";
import side_invoice from "../images/side_invoiceicon.svg";
import side_tickets from "../images/side_ticketsicon.svg";
import side_document from "../images/side_documenticon.svg";
import side_setting from "../images/side_settingicon.svg";
import side_logout from "../images/side_logouticon.svg";

const LeftSidebar = (props) => {
    if (props.location.pathname === `${process.env.PUBLIC_URL}/signin` || props.location.pathname === `${process.env.PUBLIC_URL}/uploadform` || props.location.pathname === `${process.env.PUBLIC_URL}/signup` || props.location.pathname === `${process.env.PUBLIC_URL}/forgot`) {
        return false;
    }
    return (
        <>
            <div id="sidebar" className="left_side_menu">
                <NavLink exact className="w-100 sidelogo" to={`${process.env.PUBLIC_URL}/dashboard`}>
                    <p className="m-0 fill"><img className="img-fluid" src={logo} alt="icon" /></p>
                    <p className="m-0 monogram"><img className="img-fluid" src={monogram} alt="icon" /></p>
                </NavLink>
                {/*  */}
                <div className="list-unstyled sidenavbar">
                    <NavItem>
                        <NavLink exact className="nav-link" to={`${process.env.PUBLIC_URL}/dashboard`}><img className="img-fluid" src={side_dashboard} alt="icon" /> <span className="collapsehide">Dashboard</span></NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink className="nav-link" to={`${process.env.PUBLIC_URL}/contact`}><img className="img-fluid" src={side_contact} alt="icon" /> <span className="collapsehide">Contact</span></NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink className="nav-link" to={`${process.env.PUBLIC_URL}/invoice`}><img className="img-fluid" src={side_invoice} alt="icon" /> <span className="collapsehide">Invoice</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to={`${process.env.PUBLIC_URL}/tickets`}><img className="img-fluid" src={side_tickets} alt="icon" /> <span className="collapsehide">My Tickets</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to={`${process.env.PUBLIC_URL}/document`}><img className="img-fluid" src={side_document} alt="icon" /> <span className="collapsehide">Document</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to={`${process.env.PUBLIC_URL}/setting`}><img className="img-fluid" src={side_setting} alt="icon" /> <span className="collapsehide">Settings</span></NavLink>
                    </NavItem>
                    <Button type="button" variant="" className="nav-link text-start py-3 w-100 paragraph2text position-absolute bottom-0 start-0" to={`${process.env.PUBLIC_URL}/`}><img className="img-fluid" src={side_logout} alt="icon" /> <span className="collapsehide">Logout</span></Button>
                </div>
            </div>
        </>
    )
}

export default withRouter(LeftSidebar);
