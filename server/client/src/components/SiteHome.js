import React from 'react';
import "../styles/SiteHome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class SiteHome extends React.Component {
    render() {
        return (
            <div>
                <div id="homePic"></div>
                <div id="homeFloat">
                    <h1>Welcome to Namely</h1>
                    <p>Which portal are you trying to get to?</p>
                    <div id="userPanel">

                    </div>
                    <div id="adminPanel">

                    </div>
                </div>
            </div>
        )
    }
}


export default SiteHome;
