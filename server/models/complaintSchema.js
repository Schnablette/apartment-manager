const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  problemApt: String,
  _id: Number,
  aptNumber: Number,
  type: String,
  description: String,
  date: Date
})

const Complaint = mongoose.model('complaint', complaintSchema);

module.exports = Complaint;
