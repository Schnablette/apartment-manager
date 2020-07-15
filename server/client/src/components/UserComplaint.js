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
                    <form role="form">
                        <label>Your Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" />
                        <br/>
                        <div id="offensiveWrapper"><label>Offending Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" />
                        </div>
                        <br/>
                        <label>Type</label>
                        <select className="myList">
                            <option value="noise">Noise</option>
                            <option value="smell">Smell</option>
                            <option value="other">Other</option>
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


export default UserComplaint;

