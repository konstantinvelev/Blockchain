const router = require('express').Router();
const configService = require('../services/configurationService');

router.get('/getLast', configService.getLastConfig);
router.post('/insert', configService.insertConfiguration);

module.exports = router