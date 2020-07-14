import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import "../styles/AdminNavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faHammer, faBullhorn, faUsers } from '@fortawesome/free-solid-svg-icons'

class NavBarUser extends Component {
    
    toggleNav() {

    }

    render() {
        return (
            <nav id="adminNavBar">
                <h1>Namely</h1>
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


{/* <ul id="adminNavBar-list">
<a href='/admin/reports'><li id="reports"><FontAwesomeIcon icon={faClipboardList} size="lg" style={{marginRight: "22px", transform: "rotate(-20deg)"}}/>Reports</li></a>
<a href='/admin/maintenance'><li id="maintenance"><FontAwesomeIcon icon={faHammer} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>Maintenance</li></a>
<a href='/admin/complaints'><li id="complaints"><FontAwesomeIcon icon={faBullhorn} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>Complaints</li></a>
<a href='/admin/tenants'><li id="tenants"><FontAwesomeIcon icon={faUsers} size="lg" style={{marginRight: "15px"}}/>Tenants</li></a>
</ul> */}