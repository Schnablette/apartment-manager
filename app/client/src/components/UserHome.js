import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/UserHome.css";

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
                <Link to="/">
                    <h1 className="logo">Abode</h1>
                </Link>
                <div className="homePic"></div>
                <div id="userHomeModule">
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
            </div>
        )
    }
}


export default UserHome;

