const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const keys = require('./config/keys');
const moment = require("moment");

// Schemas
const Complaint = require("./models/complaintSchema");
const Maintenance = require("./models/maintenanceSchema");
const Tenant = require("./models/tenantSchema");

// DB Setup
mongoose.connect(keys.MONGODB_URI);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

// Server Setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

// Create Data

let harry = new Tenant({
    name: "Harry Potter",
    aptNumber: 101,
    tenants: 5
})

let ron = new Tenant({
    name: "Ron Weasley",
    aptNumber: 102,
    tenants: 3
})

let hermione = new Tenant({
    name: "Hermione Granger",
    aptNumber: 103,
    tenants: 3
})

let bill = new Tenant({
    name: "Bill Weasley",
    aptNumber: 104,
    tenants: 2
})

let percy = new Tenant({
    name: "Percy Weasley",
    aptNumber: 105,
    tenants: 4
})

let draco = new Tenant ({
    name: "Draco Malfoy",
    aptNumber: 201,
    tenants: 3
})

let narcissa = new Tenant ({
    name: "Narcissa Malfoy",
    aptNumber: 202,
    tenants: 3
})

let lucius = new Tenant ({
    name: "Lucius Malfoy",
    aptNumber: 204,
    tenants: 3
})

let cedric = new Tenant ({
    name: "Cedric Diggery",
    aptNumber: 205,
    tenants: 4
})

let tom = new Tenant ({
    name: "Tom Riddle",
    aptNumber: 206,
    tenants: 1
})

let molly = new Tenant ({
    name: "Molly Weasley",
    aptNumber: 301,
    tenants: 7
})

let fred = new Tenant ({
    name: "Fred Weasley",
    aptNumber: 302,
    tenants: 2
})

let george = new Tenant ({
    name: "George Weasley",
    aptNumber: 303,
    tenants: 2
})

let shamus = new Tenant ({
    name: "Shamus Finnigan",
    aptNumber: 304,
    tenants: 3
})

// harry.save()
// ron.save()
// hermione.save()
// bill.save()
// percy.save()
// draco.save()
// narcissa.save()
// lucius.save()
// cedric.save()
// tom.save()
// molly.save()
// fred.save()
// george.save()
// shamus.save()

let m1 = new Maintenance({
    status: false,
    aptNumber: 201,
    room: "bathroom 1",
    description: "Toilet will not stop flushing. Please help.",
    date: moment().format("MM-DD-YYYY")
})

let m2 = new Maintenance({
    status: false,
    aptNumber: 103,
    room: "kitchen",
    description: "The garbage disposal won't work. Making weird sound.",
    date: moment().format("MM-DD-YYYY")
})

let m3 = new Maintenance({
    status: false,
    aptNumber: 103,
    room: "master bedroom",
    description: "Crown molding falling down off the wall.",
    date: moment().format("MM-DD-YYYY")
})

let m4 = new Maintenance({
    status: true,
    aptNumber: 101,
    room: "living room",
    description: "Cable port has broken off the wall.",
    date: moment().format("MM-DD-YYYY")
})

let m5 = new Maintenance({
    status: false,
    aptNumber: 302,
    room: "bathroom 2",
    description: "Sink won't drain for some reason.",
    date: moment().format("MM-DD-YYYY")
})

let m6 = new Maintenance({
    status: false,
    aptNumber: 301,
    room: "kitchen",
    description: "Counter vinyl peeling off the corner of the rightmost countertop.",
    date: moment().format("MM-DD-YYYY")
})

let m7 = new Maintenance({
    status: false,
    aptNumber: 301,
    room: "living room",
    description: "Shutters stuck and won't come down.",
    date: moment().format("MM-DD-YYYY")
})

let m8 = new Maintenance({
    status: false,
    aptNumber: 301,
    room: "bedroom",
    description: "Paint is peeling off the wall in the closet.",
    date: moment().format("MM-DD-YYYY")
})
  

// m1.save()
// m2.save()
// m3.save()
// m4.save()
// m5.save()
// m6.save()
// m7.save()
// m8.save()