import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom"
import "../styles/AdminNavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faHammer, faBullhorn, faUsers } from '@fortawesome/free-solid-svg-icons'

class NavBarUser extends Component {
    
    toggleNav() {

    }

    render() {
        return (
            <nav id="adminNavBar">
                <Link to="/">
                    <h1>Abode</h1>
                </Link>
                <NavLink
                    activeClassName="active-adminNav"
                    className="adminNavBar-list"
                    to="/admin/reports"
                    >
                    <FontAwesomeIcon icon={faClipboardList} size="lg" style={{marginRight: "22px", transform: "rotate(-20deg)"}}/>
                    Reports
                </NavLink>
                <NavLink
                    activeClassName="active-adminNav"
                    className="adminNavBar-list"
                    to="/admin/maintenance"
                    >
                    <FontAwesomeIcon icon={faHammer} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>    
                    Maintenance
                </NavLink>
                <NavLink
                    activeClassName="active-adminNav"
                    className="adminNavBar-list"
                    to="/admin/complaints"
                    >
                    <FontAwesomeIcon icon={faBullhorn} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>
                    Complaints
                </NavLink>
                <NavLink
                    activeClassName="active-adminNav"
                    className="adminNavBar-list"
                    to="/admin/tenants"
                    >
                    <FontAwesomeIcon icon={faUsers} size="lg" style={{marginRight: "15px"}}/>
                    Tenants
                </NavLink>
            </nav>
        )
    }
  };

export default NavBarUser;