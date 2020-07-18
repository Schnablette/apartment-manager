import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { postComplaints } from "../actions/index";
import { Redirect } from 'react-router';
import "../styles/UserComplaint.css";



class UserComplaint extends Component {
    constructor() {
        super()

        this.state = {
            aptNumber: "",
            problemApt: "", 
            type: "",
            description: "",
            redirect: false
        }
    }

    updateAptNumber(event) {
        this.setState({aptNumber: event.target.value}, () => {
            console.log("AptNumber changed to " + this.state.aptNumber)
        })
    }

    updateProblemApt(event) {
        this.setState({problemApt: event.target.value}, () => {
            console.log("ProblemApt changed to " + this.state.problemApt)
        })
    }

    updateType(event) {
        this.setState({type: event.target.value}, () => {
            console.log("Type changed to " + this.state.type)
        })
    }

    updateDescription(event) {
        this.setState({description: event.target.value}, () => {
            console.log("Description changed to " + this.state.description)
        })
    }

    submitComplaint() {
        if (this.state.description && this.state.problemApt && this.state.type && this.state.aptNumber) {
            this.props.postComplaints(this.state.aptNumber, this.state.problemApt, this.state.type, this.state.description)
            alert("complaint form submitted")
            this.setState({redirect: true})
        }
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/user" />
        } else return (
            <div id="userComplaint">
                <a href="/user"><h1 className="logo">Namely</h1></a>
                <div id="complaintBackgroundImage"></div>
                <div className="moduleForm" id="complaintForm">
                    <h1>Resident Complaint Form</h1>
                    <form role="form">
                        <label>Your Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" onChange={this.updateAptNumber.bind(this)} />
                        <br/>
                        <div id="offensiveWrapper"><label>Offending Apartment</label>
                        <input type="text" placeholder="Apt #" className="apt" onChange={this.updateProblemApt.bind(this)} />
                        </div>
                        <br/>
                        <label>Type</label>
                        <select className="myList" onChange={this.updateType.bind(this)}>
                            <option value=""></option>
                            <option value="noise">Noise</option>
                            <option value="smell">Smell</option>
                            <option value="other">Other</option>
                        </select>
                        <br/>
                        <label>Description</label>
                        <input type="text" placeholder="Description" className="description" onChange={this.updateDescription.bind(this)} />
                        <br/>
                        <button onClick={this.submitComplaint.bind(this)}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postComplaints }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserComplaint);

