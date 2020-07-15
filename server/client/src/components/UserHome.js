import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/UserHome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavBarUser from './NavBarUser';
import plant from '../assets/green-plant.png'

class UserHome extends Component {

    componentDidMount() {
        document.body.style.backgroundColor = "white";
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = "var(--main)";
    }

    render() {
        return (
            <div>
                <h1 className="logo">Namely</h1>
                <h1 id="welcome">Welcome Hill<br/>Valley Resident</h1>
                <p className="instructions">Select an option to begin.</p>
                <div id="userHome">
                    <a href="/user/maintenance">
                        <button>Write a<br/>Maintenance Report</button>
                    </a>
                    <a href="/user/complaint">
                        <button>File a <br/> Resident Complaint</button>
                    </a>
                </div>
            </div>
        )
    }
}


export default UserHome;

