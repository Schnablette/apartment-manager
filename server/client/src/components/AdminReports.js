import React, { Component } from 'react';
import "../styles/AdminReports.css";
import AdminNav from "./AdminNav";
import * as d3 from "d3";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMaintenance, getTenants, getComplaints } from "../actions/index";


class AdminReports extends Component {
    constructor() {
      super()

      this.state = {
        active: "tenants",
        h2: "Number of Tenants"
      }
    }

    componentDidMount() {
      // kick off data by getting it at start of mount
      
      this.props.getMaintenance()
      this.props.getComplaints()
    }

    xValue(apt) {
      // all apartment x values
      if ( apt === 201) {
        return 206;
      } else if (apt === 202) {
        return 266;
      } else if (apt === 203) {
        return 325;
      } else if (apt === 204) {
        return 386;
      } else if (apt === 205) {
        return 446;
      } else if (apt === 206) {
        return 506;
      } else if (apt === 101 || apt === 106) {
        return 138;
      } else if (apt === 102 || apt === 105) {
        return 133;
      } else if (apt === 103 || apt === 104) {
        return 123;
      } else if (apt === 301 || apt === 306) {
          return 574;
      } else if (apt === 302 || apt === 305) {
          return 579;
      } else if (apt === 303 || apt === 304) {
          return 589;
      }
    }

    yValue(apt) {
      if (apt === 201 || apt === 206) {
        return 110;
      } else if (apt === 202 || apt === 205) {
        return 100;
      } else if (apt === 203 || apt === 204) {
        return 95;
      } else if (apt === 101 || apt === 306) {
        return 462;
      } else if (apt === 102 || apt === 305) {
        return 412;
      } else if (apt === 103 || apt === 304) {
        return 352;
      } else if (apt === 104 || apt === 303) {
        return 302;
      } else if (apt === 105 || apt === 302) {
        return 247;
      } else if (apt === 106 || apt === 301) {
        return 192;
      } 
    }

    parseMaintenanceData(event) {
      this.setState({h2: "Number of Maint. Reports"})

      // change button color to active color
      this.setState({active: event.target.value})

      const data = this.props.maintenance.reduce((accum, singleElem) => {
        // find out how many times each apartment had a maintenance order
        if (!accum[singleElem.aptNumber]) {
          // if apartment number doesn't exist in the accumulator, create it and set it equal to one
          accum[singleElem.aptNumber] = 1;
        } else {
          // else add one
          accum[singleElem.aptNumber] = accum[singleElem.aptNumber] + 1;
        }
        return accum;
        // comes out { aptNumber: numberOfTimesMaintenanceNeedReported }
      }, {})
      
      const maintenanceData = this.props.maintenance.map(singleElem => {
        // return data as you like it
        return ({
          aptNumber: singleElem.aptNumber,
          // x and y coordinates to place d3 circle exactly on top of apartment
          x: this.xValue(singleElem.aptNumber),
          y: this.yValue(singleElem.aptNumber),
          // data is the data we want for d3 circle radius
          data: { data: data[singleElem.aptNumber], color: "var(--bad)", text: `<strong>Apt:</strong> ${singleElem.aptNumber}</br> <strong>Reports:</strong> ${data[singleElem.aptNumber]}`}
        })
      })

      // make it a global variable
      this.data = maintenanceData;
      this.renderD3svg()
    }

    parseTenantData() {
      this.setState({h2: "Number of Tenants"})

      const tenantsData = this.props.tenants.map(singleElem => {
        // return data as you like it
        return ({
          aptNumber: singleElem.aptNumber,
          // x and y coordinates to place d3 circle exactly on top of apartment
          x: this.xValue(singleElem.aptNumber),
          y: this.yValue(singleElem.aptNumber),
          // data is the data we want for d3 circle radius
          data: { data: singleElem.tenants, color: "var(--good)", text: `<strong>Apt:</strong> ${singleElem.aptNumber}</br> <strong>Lead Tenant:</strong> ${singleElem.name}</br> <strong>Tenants:</strong> ${singleElem.tenants}` }
        })
      })

      // make it a global variable
      this.data = tenantsData;
      this.renderD3svg()
    }

    parseComplaintData() {
      this.setState({h2: "Number of Complaints"})
      this.setState({active: "complaints"})

      const data = this.props.complaints.reduce((accum, singleElem) => {
        // find out how many times each apartment had a maintenance order
        if (!accum[singleElem.problemApt]) {
          // if apartment number doesn't exist in the accumulator, create it and set it equal to one
          accum[singleElem.problemApt] = 1;
        } else {
          // else add one
          accum[singleElem.problemApt] = accum[singleElem.problemApt] + 1;
        }
        return accum;
        // comes out { problemApt: numberOfTimesMaintenanceNeedReported }
      }, {})

      console.log(data)
      
      const complaintData = this.props.complaints.map(singleElem => {
        // return data as you like it
        return ({
          aptNumber: singleElem.problemApt,
          // x and y coordinates to place d3 circle exactly on top of apartment
          x: this.xValue(singleElem.problemApt),
          y: this.yValue(singleElem.problemApt),
          // data is the data we want for d3 circle radius
          data: { data: data[singleElem.problemApt], color: "var(--bad)", 
                  text: `<strong>Offending Apt:</strong> ${singleElem.problemApt}</br> <strong>Complaints:</strong> ${data[singleElem.problemApt]}` }
        })
      })

      // make it a global variable
      this.data = complaintData;
      this.renderD3svg()
    }

    renderD3svg() {
      let svg = d3.select(this.node)
      svg.selectAll("circle").remove();
      

        // create a tooltip
      var Tooltip = d3.select("body")
                      .append("div")
                      .style("opacity", 0)
                      .attr("class", "tooltip")
                      .style("background-color", "white")
                      .style("border", "solid")
                      .style("border-width", "1px")
                      .style("border-radius", "5px")
                      .style("padding", "5px")
                      .style("width", "120px")
                      .style("height", "auto")
                      .style("position", "absolute")
                      .style("z-index", "90")
                      .style("text-align", "center")
                      .style("pointer-events", "none")

      svg.selectAll("circle")
        .data(this.data)
        .enter().append('circle')
                .attr("cx", d => { return d.x })
                .attr("cy", d => { return d.y })
                .attr("r", d => { return d.data.data * 10 })
                .attr("fill", d => { return d.data.color})
                .attr("opacity", ".3")
                .style("transform", "translate(150px, 0)")
                .on('mouseover', function (d, i) {
                  d3.select(this).transition()
                       .duration('50')
                       .attr('opacity', '.85');
                  Tooltip
                       .style("opacity", 1)
                       .style("left", (d3.event.pageX + 20) + "px")
                       .style("top", (d3.event.pageY + 15) + "px")
                       .html(d.data.text)
                       
                })
                .on('mouseout', function (d, i) {
                  d3.select(this).transition()
                       .duration('50')
                       .attr('opacity', '.3');
                  Tooltip
                       .style("opacity", 0)

                  
                })
    } 

    render() {
        return (
            <div>
                <AdminNav />
                <div className="module">
                    <div id="d3-heatmap">
                        <svg id="circles" ref={node => this.node = node} width="100%" height="520"></svg>
                        <h2 id="descriptor">{this.state.h2}</h2>
                        <button id="tenants-button" onClick={this.parseTenantData.bind(this)} className={this.state.active === 'tenants' ? 'activeChartButton' : ''} value="tenants">Tenants</button>
                        <button id="maintenance-button" onClick={this.parseMaintenanceData.bind(this)} className={this.state.active === 'maintenance' ? 'activeChartButton' : ''} value="maintenance">Maintenance</button>
                        <button id="complaints-button" onClick={this.parseComplaintData.bind(this)} className={this.state.active === 'complaints' ? 'activeChartButton' : ''} value="complaints">Complaints</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {  maintenance: state.maintenance, 
            tenants: state.tenants,
            complaints: state.complaints };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMaintenance, getTenants, getComplaints }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminReports);

