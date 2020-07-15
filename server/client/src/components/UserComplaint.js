import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/UserComplaint.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavBarUser from './NavBarUser';
import plant from '../assets/green-plant.png'

class UserComplaint extends Component {

    render() {
        return (
            <div id="userComplaint">
                <h1 className="logo">Namely</h1>
                <div id="complaintBackgroundImage"></div>
                <div className="moduleForm" id="complaintForm">
                    <h1>Resident Complaint Form</h1>
                    <form role="form" id="complaintForm">
                        <label>Your Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" />
                        <br/>
                        <label>Offending Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" />
                        <br/>
                        <label>Type</label>
                        <select id="myList">
                            <option value="noise">noise</option>
                            <option value="smell">smell</option>
                            <option value="other">other</option>
                        </select>
                        <br/>
                        <label>Description</label>
                        <input type="text" placeholder="Description" id="description" />
                    </form>
                </div>
            </div>
        )
    }
}


export default UserComplaint;

