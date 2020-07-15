const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  problemApt: Number,
  aptNumber: Number,
  type: String,
  description: String,
  date: String
})

const Complaint = mongoose.model('complaint', complaintSchema);

module.exports = Complaint;
