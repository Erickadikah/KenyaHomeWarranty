const mongoose = require('mongoose');

const billingAgreementSchema = new mongoose.Schema({
  agreementId: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
});

const BillingAgreement = mongoose.model('BillingAgreement', billingAgreementSchema);
module.exports = BillingAgreement;
