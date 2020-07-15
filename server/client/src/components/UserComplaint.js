import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "../styles/UserHome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavBarUser from './NavBarUser';
import plant from '../assets/green-plant.png'

class UserComplaint extends Component {

    render() {
        return (
            <div id="userComplaint">
                <h1 className="logo">Namely</h1>
                <div className="moduleForm" id="complaintForm">
                    <h1>Resident Complaint Form</h1>
                    <form role="form" novalidate>
                        <label>Email address</label>
                        <input type="text" placeholder="Enter email" />
                        <br/>
                        <label>Email address</label>
                        <input type="dropdown" placeholder="Enter email" />
                        <br/>
                        <label>Email address</label>
                        <input type="text" placeholder="Enter email" />
                        <br/>
                    </form>
                    {/* <Form>
                        <Form.Group className="formGroup" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Apartment Number</Form.Label>
                            <Form.Control size="lg" className="formElements" type="text" placeholder="Apt Number" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Type of Complaint</Form.Label>
                            <Form.Control size="lg" className="formElements" as="select">
                            <option>Noise</option>
                            <option>Smell</option>
                            <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Offending Apartment Number</Form.Label>
                            <Form.Control size="lg" className="formElements" type="text" placeholder="Apt Number" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description of Offense</Form.Label>
                            <Form.Control size="lg" className="formElements" as="textarea" rows="3" />
                        </Form.Group>
                    </Form> */}
                </div>
            </div>
        )
    }
}


export default UserComplaint;

