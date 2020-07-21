const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maintenanceSchema = new Schema({
  status: Boolean,
  aptNumber: Number,
  description: String,
  room: String,
  date: String
})

const Maintenance = mongoose.model('maintenance', maintenanceSchema);

module.exports = Maintenance;