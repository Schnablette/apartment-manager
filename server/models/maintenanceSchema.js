const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
  status: Boolean,
  _id: Number,
  aptNumber: Number,
  description: String,
  date: Date
})

const Maintenance = mongoose.model('maintenance', maintenanceSchema);

module.exports = Maintenance;