const router = require('express').Router();
const transactionRoutes = require('./tansactions');
const configurationRoutes = require('./configurations');

router.use('/transactions', transactionRoutes);
router.use('/configurations', configurationRoutes);

module.exports = router;
