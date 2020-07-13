import React from 'react';
import "../styles/NavBar.css"

const NavBar = () => {
    // TODO
    return (
        <div id="navBar">
            <h1>Aparment Management</h1>
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