import React, { Component } from 'react';
import "../styles/UserHome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavBarUser from './NavBarUser';
import plant from '../assets/green-plant.png'

const UserHome = () => {
    return (
        <div>
            <NavBarUser />
            <div id="userHome">
                <h1>Get Started</h1>
                <p>Click on any navigation point to start</p>
                <img src={plant} />
            </div>
        </div>
    )
}


export default UserHome;

