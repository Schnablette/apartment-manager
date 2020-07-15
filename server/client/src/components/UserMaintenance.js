import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/UserMaintenance.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavBarUser from './NavBarUser';
import plant from '../assets/green-plant.png'

class UserMaintenance extends Component {

    render() {
        return (
            <div id="userMaintenance">
                <a href="/user"><h1 className="logo">Namely</h1></a>
                <div id="maintenanceBackgroundImage"></div>
                <div className="moduleForm" id="complaintForm">
                    <h1>Resident Maintenance Request</h1>
                    <form role="form" id="complaintForm">
                        <label>Your Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" />
                        <br/>
                        <label>Room</label>
                        <select className="myList">
                            <option value="master bedroom">Master Bedroom</option>
                            <option value="bedroom 1">Bedroom 1</option>
                            <option value="bedroom 2">Bedroom 2</option>
                            <option value="bathroom 1">Bathroom 1</option>
                            <option value="bathroom 2">Bathroom 2</option>
                            <option value="living room">Living Room</option>
                            <option value="kitchen">Kitchen</option>
                        </select>
                        <br/>
                        <label>Description</label>
                        <input type="text" placeholder="Description" className="description" />
                        <br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default UserMaintenance;

