const Complaint = require("./models/complaintSchema");
const Maintenance = require("./models/maintenanceSchema");
const Tenant = require("./models/tenantSchema");
const moment = require("moment");

module.exports = function(app) {
  app.get('/api/maintenance', (req, res, next) => {
    // get all maintenance reports
    Maintenance.find({}).exec((err, allMaintenance) => {
      if (err) {
        res.send(err)
      }
      res.send(allMaintenance)
    })
  })

  app.post('/maintenance', (req, res, next) => {
    // post a maintenance report
    let bodyParams = req.body

    let newMaintenance = new Maintenance({
      status: false,
      aptNumber: bodyParams.aptNumber,
      description: bodyParams.description,
      room: bodyParams.room,
      date: moment().format("MM-DD-YYYY")
    })

    newMaintenance.save()
    res.json('successful maintenance report saved')
  })

  app.get('/api/complaints', (req, res, next) => {
    // get all complaints
    Complaint.find({}).exec((err, allComplaints) => {
      if (err) {
        res.send(err)
      }
      res.send(allComplaints)
    })
  })

  app.post('/complaints', (req, res, next) => {
    // post a complaint report
    let bodyParams = req.body

    let newComplaint = new Complaint({
      aptNumber: bodyParams.aptNumber,
      description: bodyParams.description,
      date: moment().format("MM-DD-YYYY"),
      problemApt: bodyParams.problemApt,
      type: bodyParams.type
    })

    newComplaint.save()
    res.json('successful complaint saved')
  })

  app.get('/tenants', (req, res, next) => {
    // get all tenants
    Tenant.find({}).exec((err, allTenants) => {
      if (err) {
        res.send(err)
      }
      res.send(allTenants)
    })
  })

  app.post('/tenants', (req, res, next) => {
    // post a complaint report
    let bodyParams = req.body

    let newTenant = new Tenant({
      name: bodyParams.name,
      aptNumber: bodyParams.aptNumber,
      tenants: bodyParams.tenants
    })

    newTenant.save()
    res.json('successful tenant saved')
  })

}
