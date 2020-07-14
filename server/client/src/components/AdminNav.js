import React, { Component } from 'react';
import "../styles/AdminNavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faHammer } from '@fortawesome/free-solid-svg-icons'

class NavBarUser extends Component {
    
    toggleNav() {

    }

    render() {
        return (
            <div>
                <div id="adminNavBar">
                    <h1>Namely</h1>
                    <ul id="adminNavBar-list">
                        <a href='#'><li id="reports"><FontAwesomeIcon icon={faClipboardList} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>Reports</li></a>
                        <a href='#'><li id="maintenance"><FontAwesomeIcon icon={faHammer} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>Maintenance</li></a>
                        <a href='#'><li id="complaints"><FontAwesomeIcon icon={faClipboardList} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>Complaints</li></a>
                        <a href='#'><li id="tenants"><FontAwesomeIcon icon={faClipboardList} size="lg" style={{marginRight: "15px", transform: "rotate(-20deg)"}}/>Tenants</li></a>
                    </ul>
                </div>
            </div>
        )
    }
  };

export default NavBarUser;