import React from 'react';
import "../styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    // TODO
    return (
        <div id="navBar">
            <h1>Namely</h1>
            <button id="toggle-collapse">
                <FontAwesomeIcon id="bars" size="2x" icon={faBars} />
            </button>
            <ul id="navBar-list">
                <li id="leases"><a href='#'>Leases</a></li>
                <li id="maintenance"><a href='#'>Maintenance</a></li>
                <li id="complaints"><a href='#'>Complaints</a></li>
                <li id="utilities"><a href='#'>Utilities</a></li>
            </ul>
        </div>
    )
  };

export default NavBar;