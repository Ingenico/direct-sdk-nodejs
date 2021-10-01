/*
 * This file was auto-generated from the API references found at
 * https://support.direct.ingenico.com/documentation/api/reference/
 */
const communicator = require('../../utils/communicator');
const requestSchema = require('../../schemas/SessionRequest.json');
const validator = require('../../utils/validator');

const createSession = (merchantId, postData, paymentContext, cb) => {
  // validate postData
  validator.validatePostData(postData, requestSchema);

  communicator.json({
    method: 'POST',
    modulePath: `/v2/${merchantId}/sessions`,
    body: postData,
    paymentContext,
    cb,
  });
};

module.exports = createSession;
