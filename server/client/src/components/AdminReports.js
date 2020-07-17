import React, { Component } from 'react';
import "../styles/AdminReports.css";
import AdminNav from "./AdminNav";
import * as d3 from "d3";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMaintenance, changeStatus } from "../actions/index";


class AdminReports extends Component {

    componentDidMount() {
      // kick off data by getting it at start of mount
      this.props.getMaintenance()
    }

    componentDidUpdate() {
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
      } else return 200

    }

    yValue() {
      // all apartment y values
      return 200;
    }

    parseMaintenanceData() {
      const data = this.props.maintenance.reduce((accum, singleMaintenance) => {
        // find out how many times each apartment had a maintenance order
        if (!accum[singleMaintenance.aptNumber]) {
          // if apartment number doesn't exist in the accumulator, create it and set it equal to one
          accum[singleMaintenance.aptNumber] = 1;
        } else {
          // else add one
          accum[singleMaintenance.aptNumber] = accum[singleMaintenance.aptNumber] + 1;
        }
        return accum;
        // comes out { aptNumber: numberOfTimesMaintenanceNeedReported }
      }, {})
      
      const maintenanceData = this.props.maintenance.map(singleMaintenance => {
        // return data as you like it
        return ({
          aptNumber: singleMaintenance.aptNumber,
          // x and y coordinates to place d3 circle exactly on top of apartment
          x: this.xValue(singleMaintenance.aptNumber),
          y: this.yValue(singleMaintenance.aptNumber),
          // data is the data we want for d3 circle radius
          data: data[singleMaintenance.aptNumber]
        })
      })

      const uniqueMaintenanceData = maintenanceData.reduce((accum, elem) => {
        const existing = accum.find(item => item.aptNumber === elem.aptNumber);
        if (!existing) {
          return accum.concat([elem])
        } else return accum;
      }, [])

      // make it a global variable
      this.uniqueMaintenanceData = uniqueMaintenanceData;
    }

    message() {
      console.log(this.uniqueMaintenanceData)
    }

    renderD3svg() {
      console.log(this.node)
      let svg = d3.select(this.node)
      let dataArray = [15]

      let newX = 300;

      svg.selectAll("circle")
        .data(this.uniqueMaintenanceData)
        .enter().append('circle')
                .attr("cx", d => { return d.x })
                .attr("cy", d => { return d.y })
                .attr("r", d => { return d.data * 15 })
    } 

    render() {
        return (
            <div>
                <AdminNav />
                <div className="module">
                    <div id="d3-heatmap">
                      <svg id="apartments-container" width="100%" height="500px" >
                          <path id="a201" className="apartments" d="M192.4,134.3c-8.4-27.2-16.7-54.4-25.1-81.6c-2-6.3,2.8-13.4,10.6-15.7c10.8-3.1,21.7-5.8,32.6-8.3
                              c7.9-1.8,15.5,2.2,16.8,8.7c5.7,27.9,11.4,55.8,17.1,83.7c1.3,6.5-3,12.9-9.5,14.4c-9.1,2.1-18.1,4.4-27.1,6.9
                              C201.2,144.1,194.3,140.6,192.4,134.3z"/>
                          <path id="a202" className="apartments" d="M246.4,120.6c-5.6-27.9-11.2-55.8-16.8-83.7c-1.3-6.5,4-13.1,12-14.5c11-1.9,22-3.6,33.1-5c8-1,15.1,3.7,15.7,10.3
                              c2.9,28.3,5.8,56.6,8.7,84.9c0.6,6.6-4.2,12.5-10.9,13.3c-9.2,1.1-18.4,2.5-27.5,4.2C254.1,131.3,247.7,127.1,246.4,120.6z"/>
                          <path className="apartments" d="M301.2,112.4c-2.8-28.3-5.6-56.7-8.3-85c-0.7-6.6,5.3-12.6,13.4-13.2c11.1-0.8,22.2-1.4,33.3-1.7
                              c8.1-0.2,14.6,5.2,14.6,11.8c0.1,28.5,0.1,56.9,0.2,85.4c0,6.6-5.4,12-12.1,12.2c-9.3,0.2-18.5,0.7-27.7,1.4
                              C307.8,123.8,301.8,119,301.2,112.4z"/>
                          <path className="apartments" d="M356.4,109.8c0.1-28.5,0.1-56.9,0.2-85.4c0-6.6,6.5-12,14.6-11.8c11.1,0.3,22.2,0.8,33.3,1.7c8.1,0.6,14.1,6.6,13.4,13.2
                              c-2.8,28.3-5.6,56.7-8.3,85c-0.7,6.6-6.6,11.4-13.3,10.9c-9.2-0.7-18.5-1.2-27.7-1.4C361.8,121.8,356.4,116.4,356.4,109.8z"/>
                          <path className="apartments" d="M411.6,112.6c2.9-28.3,5.8-56.6,8.7-84.9c0.6-6.6,7.7-11.3,15.7-10.3c11.1,1.4,22.1,3,33.1,5c8,1.4,13.4,8,12,14.5
                              c-5.6,27.9-11.2,55.8-16.8,83.7c-1.3,6.5-7.7,10.7-14.4,9.5c-9.1-1.6-18.3-3-27.5-4.2C415.8,125.1,411,119.2,411.6,112.6z"/>
                          <path className="apartments" d="M466.4,121c5.7-27.9,11.4-55.8,17.1-83.7c1.3-6.5,8.8-10.5,16.8-8.7c10.9,2.5,21.8,5.3,32.6,8.3c7.9,2.2,12.6,9.3,10.6,15.7
                              c-8.4,27.2-16.7,54.4-25.1,81.6c-2,6.3-8.8,9.8-15.3,8c-9-2.5-18-4.9-27.1-6.9C469.4,133.9,465.1,127.5,466.4,121z"/>
                          <path className="apartments" d="M188,448.3c-30.3,8.2-60.6,16.5-90.9,24.7c-4.8,1.3-9.6-1.9-10.6-7.2c-2.5-12.3-4.7-24.6-6.5-37c-0.8-5.3,2.4-10.4,7.2-11.2
                              c30.1-5.6,60.2-11.2,90.2-16.7c4.7-0.9,9.2,2,10.1,6.5c2.1,10.3,4.4,20.5,7,30.7C195.6,442.4,192.7,447,188,448.3z"/>
                          <path className="apartments" d="M177,398.9c-30.1,5.5-60.1,11-90.2,16.4c-4.7,0.9-9.1-2.8-9.8-8.1c-1.5-12.4-2.7-24.8-3.6-37.3c-0.4-5.4,3.2-10.1,7.8-10.5
                              c29.6-2.9,59.3-5.8,88.9-8.6c4.7-0.4,8.8,2.8,9.4,7.3c1.3,10.4,2.8,20.8,4.6,31.1C184.9,393.7,181.7,398,177,398.9z"/>
                          <path className="apartments" d="M170,348.9c-29.6,2.8-59.2,5.6-88.8,8.3c-4.7,0.4-8.7-3.5-8.9-8.9c-0.5-12.4-0.7-24.9-0.6-37.3c0-5.4,3.8-9.7,8.4-9.8
                              c29-0.3,58-0.5,86.9-0.8c4.6,0,8.3,3.6,8.5,8.1c0.4,10.5,1.1,21,2.1,31.4C178,344.5,174.6,348.5,170,348.9z"/>
                          <path className="apartments" d="M166.9,298.6c-28.9,0.2-57.9,0.3-86.8,0.5c-4.6,0-8.1-4.3-7.9-9.7c0.5-12.4,1.2-24.8,2.3-37.2c0.5-5.3,4.5-9.4,8.9-9
                              c28.1,2.3,56.2,4.6,84.4,6.8c4.4,0.4,7.8,4.3,7.6,8.8c-0.4,10.5-0.5,21-0.4,31.5C175.1,294.9,171.5,298.6,166.9,298.6z"/>
                          <path className="apartments" d="M167.8,248.1c-28.1-2.4-56.2-4.7-84.2-7.1c-4.4-0.4-7.6-5-6.9-10.3c1.4-12.4,3.2-24.7,5.3-36.9c0.9-5.3,5.1-9,9.4-8.2
                              c27.1,4.7,54.1,9.4,81.2,14.1c4.2,0.8,7.2,5,6.7,9.5c-1.2,10.5-2.2,21-2.9,31.5C176,245.1,172.3,248.5,167.8,248.1z"/>
                          <path className="apartments" d="M172.8,197.8c-27-4.8-54-9.6-81.1-14.4c-4.2-0.7-6.9-5.6-5.9-10.9c2.4-12.2,5.2-24.4,8.2-36.5c1.3-5.2,5.7-8.5,9.8-7.4
                              c25.8,7,51.6,14.1,77.4,21.1c4.1,1.1,6.6,5.6,5.7,10.1c-2.1,10.4-3.8,20.8-5.4,31.3C180.9,195.5,177,198.5,172.8,197.8z"/>
                          <path className="apartments" d="M522.7,451.4c30.3,8.2,60.6,16.5,90.9,24.7c4.8,1.3,9.6-1.9,10.6-7.2c2.5-12.3,4.7-24.6,6.5-37c0.8-5.3-2.4-10.4-7.2-11.2
                              c-30.1-5.6-60.2-11.2-90.2-16.7c-4.7-0.9-9.2,2-10.1,6.5c-2.1,10.3-4.4,20.5-7,30.7C515.1,445.5,518,450.1,522.7,451.4z"/>
                          <path className="apartments" d="M533.7,402.1c30.1,5.5,60.1,11,90.2,16.4c4.7,0.9,9.1-2.8,9.8-8.1c1.5-12.4,2.7-24.8,3.6-37.3c0.4-5.4-3.2-10.1-7.8-10.5
                              c-29.6-2.9-59.3-5.8-88.9-8.6c-4.7-0.4-8.8,2.8-9.4,7.3c-1.3,10.4-2.8,20.8-4.6,31.1C525.8,396.9,529,401.2,533.7,402.1z"/>
                          <path className="apartments" d="M540.7,352.1c29.6,2.8,59.2,5.6,88.8,8.3c4.7,0.4,8.7-3.5,8.9-8.9c0.5-12.4,0.7-24.9,0.6-37.3c0-5.4-3.8-9.7-8.4-9.8
                              c-29-0.3-58-0.5-86.9-0.8c-4.5,0-8.3,3.6-8.5,8.1c-0.4,10.5-1.1,21-2.1,31.4C532.7,347.6,536.1,351.6,540.7,352.1z"/>
                          <path className="apartments" d="M543.8,301.8c28.9,0.2,57.9,0.3,86.8,0.5c4.6,0,8.1-4.3,7.9-9.7c-0.5-12.4-1.2-24.8-2.3-37.2c-0.5-5.3-4.5-9.4-8.9-9
                              c-28.1,2.3-56.2,4.6-84.4,6.8c-4.4,0.4-7.8,4.3-7.6,8.8c0.4,10.5,0.5,21,0.4,31.5C535.6,298,539.2,301.7,543.8,301.8z"/>
                          <path className="apartments" d="M542.9,251.3c28.1-2.4,56.2-4.7,84.2-7.1c4.4-0.4,7.6-5,6.9-10.3c-1.4-12.4-3.2-24.7-5.3-36.9c-0.9-5.3-5.1-9-9.4-8.2
                              c-27.1,4.7-54.1,9.4-81.2,14.1c-4.2,0.8-7.2,5-6.7,9.5c1.2,10.5,2.2,21,2.9,31.5C534.7,248.3,538.4,251.6,542.9,251.3z"/>
                          <path className="apartments" d="M537.9,200.9c27-4.8,54-9.6,81.1-14.4c4.2-0.7,6.9-5.6,5.9-10.9c-2.4-12.2-5.2-24.4-8.2-36.5c-1.3-5.2-5.7-8.5-9.8-7.4
                              c-25.8,7-51.6,14.1-77.4,21.1c-4.1,1.1-6.6,5.6-5.7,10.1c2.1,10.4,3.8,20.8,5.4,31.3C529.8,198.6,533.7,201.6,537.9,200.9z"/>
                          <text className="section" transform="matrix(1 0 0 1 198.6152 313.4097)">1</text>
                          <text className="section" transform="matrix(1 0 0 1 475.6699 313.4097)">3</text>
                          <text className="section" transform="matrix(1 0 0 1 338.6909 188.5688)">2</text>
                        </svg>
                        <svg id="circles" ref={node => this.node = node} width="100%" height="500px"></svg>
                        <button id="tenants-button" onClick={this.parseMaintenanceData.bind(this)}>tenants</button>
                        <button id="maintenance-button" onClick={this.renderD3svg.bind(this)} >maintenance</button>
                        <button id="complaints-button">complaints</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return { maintenance: state.maintenance };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMaintenance, changeStatus }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminReports);

