import React from 'react';
import '../styles/SideBar.css';

const SideBar = () => {
    return (
        <div id="left-sideBar">
            <div className="sideBar-module" id="first-sideBar"><h1>Hellow Werld</h1></div>
            <div className="br"></div>
            <div className="sideBar-module" id="second-sideBar"></div>
            <div className="br"></div>
            <div className="sideBar-module" id="third-sideBar"></div>
        </div>
    )
}

export default SideBar;