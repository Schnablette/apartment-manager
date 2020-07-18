import React, { Component } from 'react';
import "../styles/UserMaintenance.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postMaintenance } from "../actions/index";
import { Redirect } from 'react-router';

class UserMaintenance extends Component {
    constructor() {
        super()

        this.state = {
            aptNumber: "",
            room: "",
            description: "",
            redirect: false
        }
    }

    updateApt(event) {
        this.setState({aptNumber: event.target.value}, () => {
            console.log("AptNumber changed to " + this.state.aptNumber)
        })
    }

    updateDesc(event) {
        this.setState({description: event.target.value}, () => {
            console.log("Description changed to " + this.state.aptNumber)
        })
    }

    updateRoom(event) {
        this.setState({room: event.target.value}, () => {
            console.log("Room changed to " + this.state.room)
        })
    }

    submitMaintenance() {
        if (this.state.aptNumber && this.state.description && this.state.room) {
            this.props.postMaintenance(this.state.aptNumber, this.state.room, this.state.description)
            alert("maintenance report submitted")
            this.setState({redirect: true})
        } else alert("Please be sure to fill out all areas of the request.")
    }


    render() {
        if (this.state.redirect === true) {
            return (
                <Redirect to="/user" />
            )
        }

        return (
            <div id="userMaintenance">
                <a href="/user"><h1 className="logo">Namely</h1></a>
                <div id="maintenanceBackgroundImage"></div>
                <div className="moduleForm" id="complaintForm">
                    <h1>Resident Maintenance Request</h1>
                    <form role="form" id="complaintForm">
                        <label>Your Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" onChange={this.updateApt.bind(this)} max={3}/>
                        <br/>
                        <label>Room</label>
                        <select className="myList" onChange={this.updateRoom.bind(this)}>
                            <option value=""></option>
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
                        <input type="text" placeholder="Description" className="description" onChange={this.updateDesc.bind(this)}/>
                        <br/>
                        <button onClick={this.submitMaintenance.bind(this)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postMaintenance }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserMaintenance);
