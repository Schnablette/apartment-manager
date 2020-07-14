const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  name: String,
  _id: Number,
  aptNumber: Number,
})

const Tenant = mongoose.model('tenant', tenantSchema);

module.exports = Tenant;
