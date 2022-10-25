const router = require('express').Router();
const txService = require('../services/transactionServices');

router.post('/insert', txService.insertTx);

module.exports = router