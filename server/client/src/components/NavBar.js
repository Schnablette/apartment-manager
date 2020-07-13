import React, { Component } from 'react';
import "../styles/NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class NavBar extends Component {
    
    toggleNav() {
        if (document.getElementById('navBar-list').style.display === "block" && document.body.clientWidth < 751) {
            document.getElementById('navBar-list').style.display = "none"
        } else {
            document.getElementById('navBar-list').style.display = "block" 
        }

        if (document.body.clientWidth > 750) {
            document.getElementById('navBar-list').style.display = "block" 
        }
    }

    render() {
        return (
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
        )
    }
  };

export default NavBar;