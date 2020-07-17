import React from 'react';
import "../styles/SiteHome.css";
import { Link } from "react-router-dom"

class SiteHome extends React.Component {
    render() {
        return (
            <div>
                <div className="homePic"></div>
                <div id="homeFloat">
                    <h1>Welcome to Abode</h1>
                    <p>Which portal are you trying to get to?</p>
                    <Link to="/user" style={{ textDecoration: 'none' }}>
                        <div id="userPanel">
                            <h2>Resident</h2>
                        </div>
                    </Link>
                    <Link to="/admin/reports" style={{ textDecoration: 'none' }}>
                        <div id="adminPanel">
                            <h2>Admin</h2>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}


export default SiteHome;
