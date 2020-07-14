const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
  name: String,
  _id: String,
  aptNumber: String,
})

const Tenant = mongoose.model('tenant', tenantSchema);

module.exports = Tenant;
