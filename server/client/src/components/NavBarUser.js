import React, { Component } from 'react';
import "../styles/NavBarUser.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route } from 'react-router';

class NavBarUser extends Component {
    
    toggleNav() {

    }

    render() {
        return (
            <div>
                <div id="navBar">
                    <h1>Namely</h1>
                    <button id="toggle-collapse" onClick={this.toggleNav.bind(this)}>
                        <FontAwesomeIcon id="bars" size="2x" icon={faBars} />
                    </button>
                    <ul id="navBar-list">
                        <li id="leases"><a href='#'>Leases</a></li>
                        <li id="maintenance"><a href='#'>Maintenance</a></li>
                        <li id="complaints"><a href='#'>Complaints</a></li>
                        <li id="utilities"><a href='#'>Utilities</a></li>
                    </ul>
                </div>
            </div>
        )
    }
  };

export default NavBarUser;