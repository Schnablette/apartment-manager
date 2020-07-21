const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  name: String,
  aptNumber: Number,
  tenants: Number
})

const Tenant = mongoose.model('tenant', tenantSchema);

module.exports = Tenant;
