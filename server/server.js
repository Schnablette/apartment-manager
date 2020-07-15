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

let c1 = new Complaint ({
    problemApt: 101,
    aptNumber: 102,
    type: "noise",
    description: "Harry's apartment will not stop bumping loud music at all hours of the night. I'm writing this at 10:30pm, and he's blasting Nicki Minaj.",
    date: moment().format("MM-DD-YYYY")
})

let c11 = new Complaint ({
    problemApt: 206,
    aptNumber: 205,
    type: "smell",
    description: "It honestly smells like something died in room 205",
    date: moment().format("MM-DD-YYYY")
})

let c2 = new Complaint ({
    problemApt: 206,
    aptNumber: 204,
    type: "smell",
    description: "Bad smell coming from room 206. Does this guy bring raw fish home?",
    date: moment().format("MM-DD-YYYY")
})

let c3 = new Complaint ({
    problemApt: 206,
    aptNumber: 205,
    type: "noise",
    description: "Loud sounds of incantations at 11 o' clock. This person is impossible to live next to",
    date: moment().format("MM-DD-YYYY")
})


let c4 = new Complaint ({
    problemApt: 105,
    aptNumber: 104,
    type: "noise",
    description: "I know it's only noon, but this person is having a shouting match with her cat. Obnoxious.",
    date: moment().format("MM-DD-YYYY")
})

let c5 = new Complaint ({
    problemApt: 302,
    aptNumber: 303,
    type: "smell",
    description: "I dont know what this person is cooking, but it constantly smells like smoke.",
    date: moment().format("MM-DD-YYYY")
})

let c6 = new Complaint ({
    problemApt: 206,
    aptNumber: 201,
    type: "other",
    description: "Tom is extremely unpleasant. I offered to help him carry in groceries, and he just hissed at me. Plus, he threatened to kill my rabbit.",
    date: moment().format("MM-DD-YYYY")
})

// c1.save()
// c11.save()
// c2.save()
// c3.save()
// c4.save()
// c5.save()
// c6.save()

